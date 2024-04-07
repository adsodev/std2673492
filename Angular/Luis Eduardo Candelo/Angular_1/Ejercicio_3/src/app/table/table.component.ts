import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <th>Date Posted</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.category }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: `
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    box-shadow:  5px 5px 10px 10px rgba(0,0,0,0.2);
  }


  
  td {
    padding: 8px;
    text-align: center;
  }

  th {
    padding: 10px;
    margin: 10px 0;
  }
  
  
  tr {
    border-bottom: 1px solid #ddd;
  }
  
  `
})
export class TableComponent {

  items = [
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
    {date: "15/05/18", title: "Post #1", category: "Web Development"},
  ];

}
