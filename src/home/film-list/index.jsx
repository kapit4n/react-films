import React from 'react';
import './film-list.css';

function FilmList() {
  return (
    <>
      <div>
        filters goes here
      </div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Release date
            </th>

            <th>
              Duration
            </th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avengers 4</td>
            <td>July 4</td>
            <td>3hrs</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FilmList;