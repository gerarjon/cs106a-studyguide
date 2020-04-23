import React, { Component } from 'react';
import data from '../data/data';

class Lectures extends Component {
  render() {
    return (
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">Lectures</h1>
            <hr></hr>
          </div>
        </section>
        <section classname="section">
          {data.map(result => {
            return (
              <div className="container lectureContainer" key={result.id}>
                <h3 className="title is-4">{result.title}</h3>
                <article className="media">
                  <div className="media-content">
                    <div className="columns is-multiline">
                      {
                        result.video.map(url => {
                          return (
                            <div className="column is-4">
                              <iframe className="lectureVideo" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src={url} width="640" height="360" frameborder="0">
                              </iframe>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </section>
        <div style={{height: "200px"}}></div>
      </main>
    )
  }
}

export default Lectures;