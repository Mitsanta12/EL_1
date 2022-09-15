import './App.css';
import React from 'react';
import NavbarBrand from './component/NavbarBrand';
import NavbarSearch from './component/NavbarSearch';
import SidenavCore from './component/SidenavCore';
import Tables from './component/Tables';
import DataTables from './component/DataTables';




const PRODUCTS = [
    {Id_candidate: '1',Name: 'Amie',First_Name: 'Francisco Torphy',Birth_date: '1998-12-30',Mail: "Wilfrid.Hayes43@yahoo.com",Contact: "0348856666", Id_candidacy: 72,},
    {Id_candidate: '2',Name: 'Dian',First_Name: 'Todd Homenick',Birth_date: '1999-12-04',Mail: "Cydney.Rodriguez77@yahoo.com",Contact: "0340817358", Id_candidacy: 49,},
    {Id_candidate: '3',Name: 'Cornl',First_Name: 'Kristin Price',Birth_date: '1997-10-25',Mail: "Hassie_Boyer48@yahoo.com",Contact: "0323915050",Id_candidacy: 65,},{Id_candidate: '4',Name: 'Clot',First_Name: 'Marcos Keeling',Birth_date: '2000-04-18',Mail: "Roy_Gislason16@hotmail.com",Contact: "0337919527",Id_candidacy: 8},
    {Id_candidate: '5',Name: 'Javi',First_Name: 'Cindy Bashirian',Birth_date: '2002-10-05',Mail: "Mathilde_Rogahn@hotmail.com",Contact: "0328950341",Id_candidacy: 62},
    {Id_candidate: '6',Name: 'Zachiah',First_Name: 'Ellen Jacobson',Birth_date: '1997-03-01',Mail: "Darrick_Morar14@gmail.com",Contact: "0320342811", Id_candidacy: 49},
    {Id_candidate: '7',Name: 'Mari',First_Name: 'Marty Lebsack',Birth_date: '1999-09-22',Mail: "Sidney80@hotmail.com",Contact: "0348111285",Id_candidacy: 60,},{Id_candidate: '8',Name: 'Antw',First_Name: 'Dr. Preston Kub',Birth_date: '1997-03-26',Mail: "Yesenia_McCullough1@gmail.com",Contact: "0344988963", Id_candidacy: 72},
    {Id_candidate: '9',Name: 'Mona',First_Name: 'Marvin Satterfield',Birth_date: '2002-07-29',Mail: "Max43@yahoo.com",Contact: "0348722054",Id_candidacy: 51},{Id_candidate: '10',Name: 'Bula',First_Name: 'Salvatore Abshire',Birth_date: '1997-03-30',Mail: "Samara23@hotmail.com",Contact: "0324683796", Id_candidacy: 37}
    ];

function ProductRow ({product}){
    return <tr>
    <td>{product.Id_candidate}</td>
    <td>{product.Name}</td>
    <td>{product.First_Name}</td>
    <td>{product.Birth_date}</td>
    <td>{product.Mail}</td>
    <td>{product.Contact}</td>
    <td>{product.Id_candidacy}</td>
</tr>
}
function ProductCategoryRow ({category}){
    return <tr>
        <th colSpan='7'>{category}</th>
    </tr>
}

function ProductTable ({products}){
    const rows =[];
    let lastCategory = null;
    products.forEach(product =>{
        if(product.category !== lastCategory){
            lastCategory = product.category ;
            rows.push(<ProductCategoryRow category={product.category}/>)
        }
        rows.push(<ProductRow product={product}/>)
    })
    return (
        <table className='table'>
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
            {rows}
        </tbody>
        </table>
       
    );
}
class FilterableProductTable extends React.Component {
    render(){
        const{products}=this.props;
        return <ProductTable products={products}/>
    }
}


function App(){
    return ( 
      <body class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <NavbarBrand/>
        <NavbarSearch/>
      </nav>
      <div id="layoutSidenav">
           <div id="layoutSidenav_nav">
               <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                   <div class="sb-sidenav-menu">
                   <SidenavCore/>
                   </div>
               </nav>
           </div>
      </div>
      <div class="Container">
      <div id="layoutSidenav_content ">
         <main>
         <div class="container-fluid px-4 ">
           <Tables/>
           </div>
           <div class="datatables card mb-4">
             <DataTables/>
           </div>
           <div class="card mb-4">
                            <div class="card-header">
                            <FilterableProductTable products={PRODUCTS}/>
                            </div>
                            
                                     
                        </div>
         </main>

       </div>
       </div>
      
  </body>
    )
}

export default App;
