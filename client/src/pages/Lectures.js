import React, { Component } from 'react';
import data from '../data/data';

class Lectures extends Component {
  render() {
    return (
      <div>
        {data.map(result => {
          return (
            <section key={result.id} className="section">
              <div className="container">
                {result.title}
                <article className="media">
                  <div className="media-content">
                    {
                      result.video.map(url => {
                        return (
                          <iframe class="lectureVideo" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src={url} id="widget34" width="640" height="360" frameborder="0">
                          </iframe>
                        )
                      })
                    }
                  </div>
                </article>
              </div>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Lectures;