import './App.css';
import React from 'react';
import NavbarBrand from './component/NavbarBrand';
import SidebarToggle from './component/SidebarToggle';
import NavbarSearch from './component/NavbarSearch';
import Navbar1 from './component/Navbar1';
import SidenavCore from './component/SidenavCore';
import SidenavFooter from './component/SidenavFooter';
import Tables from './component/Tables';
import DataTables from './component/DataTables';
import DatatablesExamples from './component/DatatablesExamples';
import Footer from './component/Footer';


const PRODUCTS = [
    {Name:"Tiger Nixon",Position:"System Architect",Office:"Edinburgh",age:61,Start_date:"2011/04/25",salary:"$320,800"},
    {Name:"Airi Satou",Position:"Accountant",Office:"Tokyo",age:33,Start_date:"2008/11/28",salary:"$162,700"},
    {Name:"Garrett Winters",Position:"Junior Technical Author",Office:"Tokyo",age:63,Start_date:"2011/07/25",salary:"$170,750"},
    {Name:"Ashton Cox",Position:"Senior Javascript Developer",Office:"Edinburgh",age:22,Start_date:"2012/03/29",salary:"$433,060"},
    {Name:"Cedric Kelly",Position:"Accountant",Office:"Tokyo",age:33,Start_date:"2008/11/28",salary:"$162,700"},
    {Name:"Brielle Williamson",Position:"Integration Specialist",Office:"TNew York",age:61,Start_date:"2012/12/02",salary:"$372,000"},
    {Name:"Herrod Chandler",Position:"Sales Assistant",Office:"San Francisco",age:55,Start_date:"2012/08/06",salary:"$137,500"},
    {Name:"Rhona Davidson",Position:"Integration Specialist",Office:"Tokyo",age:33,Start_date:"2010/10/14",salary:"$327,900"},
    {Name:"Colleen Hurst",Position:"Javascript Developer",Office:"San Francisco",age:39,Start_date:"2009/09/15",salary:"$205,500"},
    {Name:"Rhona Davidson",Position:"Software Engineer",Office:"Edinburgh",age:23,Start_date:"2010/10/14",salary:"$327,900"},
    {Name:"Sonya Frost",Position:"Integration Specialist",Office:"Tokyo",age:33,Start_date:"2008/12/13",salary:"$103,600"},
    {Name:"Jena Gaines",Position:"Office Manager",Office:"London",age:30,Start_date:"2008/12/19",salary:"$90,560"},

];
function ProductRow ({product}){
    return <tr>
    <td>{product.Name}</td>
    <td>{product.Position}</td>
    <td>{product.Office}</td>
    <td>{product.age}</td>
    <td>{product.Start_date}</td>
    <td>{product.salary}</td>
</tr>
}
function ProductCategoryRow ({category}){
    return <tr>
        <th colSpan='6'>{category}</th>
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
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
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
        <SidebarToggle/>
        <NavbarSearch/>
        <Navbar1/>
      </nav>
      <div id="layoutSidenav">
           <div id="layoutSidenav_nav">
               <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                   <div class="sb-sidenav-menu">
                   <SidenavCore/>
                   </div>
                   <SidenavFooter/>
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
         <footer class="py-4 bg-light mt-auto">
             <div class="container-fluid px-4">
                <Footer/>
             </div>
         </footer>
       </div>
       </div>
      
  </body>
    )
}

export default App;
