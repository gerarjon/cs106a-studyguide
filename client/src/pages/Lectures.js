import React, { Component } from 'react';
import data from '../data/data';

class Lectures extends Component {
  render() {
    return (
      <main className="section">
        {data.map(result => {
          return (
            <div className="container lectureContainer" key={result.id}>
              <h3 className="title">{result.title}</h3>
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
      </main>
    )
  }
}

export default Lectures;