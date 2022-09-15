import React from "react";
function TryListItem(){
const data = [
    {Id_candidate: '1',Name: 'Amie',First_Name: 'Francisco Torphy',Birth_date: '1998-12-30',Mail: "Wilfrid.Hayes43@yahoo.com",Contact: "0348856666", Id_candidacy: 72,},
{Id_candidate: '2',Name: 'Dian',First_Name: 'Todd Homenick',Birth_date: '1999-12-04',Mail: "Cydney.Rodriguez77@yahoo.com",Contact: "0340817358", Id_candidacy: 49,},
{Id_candidate: '3',Name: 'Cornl',First_Name: 'Kristin Price',Birth_date: '1997-10-25',Mail: "Hassie_Boyer48@yahoo.com",Contact: "0323915050",Id_candidacy: 65,},{Id_candidate: '4',Name: 'Clot',First_Name: 'Marcos Keeling',Birth_date: '2000-04-18',Mail: "Roy_Gislason16@hotmail.com",Contact: "0337919527",Id_candidacy: 8},
{Id_candidate: '5',Name: 'Javi',First_Name: 'Cindy Bashirian',Birth_date: '2002-10-05',Mail: "Mathilde_Rogahn@hotmail.com",Contact: "0328950341",Id_candidacy: 62},
{Id_candidate: '6',Name: 'Zachiah',First_Name: 'Ellen Jacobson',Birth_date: '1997-03-01',Mail: "Darrick_Morar14@gmail.com",Contact: "0320342811", Id_candidacy: 49},
{Id_candidate: '7',Name: 'Mari',First_Name: 'Marty Lebsack',Birth_date: '1999-09-22',Mail: "Sidney80@hotmail.com",Contact: "0348111285",Id_candidacy: 60,},{Id_candidate: '8',Name: 'Antw',First_Name: 'Dr. Preston Kub',Birth_date: '1997-03-26',Mail: "Yesenia_McCullough1@gmail.com",Contact: "0344988963", Id_candidacy: 72},
{Id_candidate: '9',Name: 'Mona',First_Name: 'Marvin Satterfield',Birth_date: '2002-07-29',Mail: "Max43@yahoo.com",Contact: "0348722054",Id_candidacy: 51},{Id_candidate: '10',Name: 'Bula',First_Name: 'Salvatore Abshire',Birth_date: '1997-03-30',Mail: "Samara23@hotmail.com",Contact: "0324683796", Id_candidacy: 37}
];
    return(
      <table> 
         <thead>
            <tr>
                <th>Id_candidate</th>
                <th>Name</th>
                <th>First_Name</th>
                <th>Birth_date</th>
                <th>Mail</th>
                <th>Contact</th>
                <th>Id_candidacy</th>
            </tr>
        </thead>
          <tbody>
              {data.map(item =>(<tr><td>{item.Id_candidate}</td><td>{item.Name}</td><td>{item.First_Name}</td>
              <td>{item.Birth_date}</td><td>{item.Start_date}</td><td>{item.Mail}</td><td>{item.Contact}</td><td>{item.Id_candidacy}</td></tr>))}
          </tbody>
      </table>
    );
};
export default TryListItem;