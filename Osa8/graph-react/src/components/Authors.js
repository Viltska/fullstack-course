import React from 'react'
import EditBirthdate from './EditBirthdate'

const Authors = ({ authors, show }) => {

  if (!show) {
    return null
  }

  return (
    <div>
      <h2>Authors</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>
              Born
            </th>
            <th>
              Books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <EditBirthdate />
    </div>
  )
}

export default Authors