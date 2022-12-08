



import React from 'react'
import "./Home.css"
import { VscArrowSwap } from 'react-icons/vsc'
import axios from 'axios'
import group from "../../images/Group.png"
import { FiCopy } from 'react-icons/fi'
import jp from "../../images/japan.png"
import { BsCalendar, BsChevronDown } from 'react-icons/bs'
import fr from "../../images/france.png"
import { BsArrowRight } from 'react-icons/bs'
import ger from "../../images/german.jpg"
import { FaCoins, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import img from "../../images/Image.png"
import { IoAirplaneSharp } from 'react-icons/io5'
import grouplogo from "../../images/Group216.png"
import rom from "../../images/asd.jpg"
import { useState } from 'react'
import countries from './data'
import Alba from './data'
import { ct } from './data'

const Home = () => {
  
  var a = new FormData()
  var b = new FormData()
  const [allcitiessend, setallcitiessend] = useState(["sd"])
  const [allcitiesdest, setallcitiesdest] = useState([])
  const [jsoninfo, setjsoninfo] = useState()
  function setoptionss(val1, val2, val3) {
    setoptions(val1)
    setimgs(val3)
    setname(val2)
    setallcitiessend([])
    setname3('Select city')
    var a3 = new FormData()
    a3.append('username', 'clienttest@fancourier.ro')
    a3.append('client_id', '323245')
    a3.append('user_pass', 'testareFAN')
    a3.append('judet', val2)
    var l
    
    axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
      var ax = res.data.split("\n")
      ax.forEach(element => {
        l = element.split(',')
        if (l[1] && l[1].length >= 1) {
          var t = l[1].replaceAll('"', '')
          setallcitiessend(prevState => [...prevState, t]);
        }


      });
    })


  }
  function setoptionss2(val1, val2, val3) {
    setoptions2(val1)
    setimgs2(val3)
    setname2(val2)
    setallcitiesdest([])
    setname4('Select city')
    var a3 = new FormData()
    a3.append('username', 'clienttest@fancourier.ro')
    a3.append('client_id', '323245')
    a3.append('user_pass', 'testareFAN')
    a3.append('judet', val2)
    var l
    axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
      var ax = res.data.split("\n")
      ax.forEach(element => {
        l = element.split(',')
        if (l[1] && l[1].length >= 1) {
          var t = l[1].replaceAll('"', '')
          setallcitiesdest(prevState => [...prevState, t]);
        }


      });
    })

  }
  function setoptionss3(val1, val2, val3) {
    setoptions3(val1)
    setimgs3(val3)
    setname3(val2)

  }
  function setoptionss4(val1, val2, val3) {
    setoptions4(val1)
    setimgs4(val3)
    setname4(val2)

  }
  const [imgs, setimgs] = useState(ger)
  const [options, setoptions] = useState('options2')
  const [name, setname] = useState("Sender Country")


  const [imgs2, setimgs2] = useState(ger)
  const [options2, setoptions2] = useState('options2')
  const [name2, setname2] = useState("Select Country")


  const [imgs4, setimgs4] = useState(ger)
  const [options4, setoptions4] = useState('options2')
  const [name4, setname4] = useState("First Choose the Country ")


  const [imgs3, setimgs3] = useState(ger)
  const [options3, setoptions3] = useState('options2')
  const [name3, setname3] = useState("First Choose the Country ")
  function getrequest2() {

    a.append('username', 'clienttest@fancourier.ro')
    a.append('client_id', '323245')
    a.append('user_pass', 'testareFAN')
    a.append('serviciu', 'Produse Albe')
    a.append('localitate_dest', "Agafton")
    a.append('localitate_exp', 'Albesti-Muru')
    a.append('judet_exp', 'Prahova')
    a.append('judet_dest', 'Botosani')
    a.append('plicuri', "1")
    a.append('colete', "1")
    a.append('greutate', "1")
    a.append('lungime', "10")
    a.append('latime', "10")
    a.append('inaltime', "10")

    b.append('username', 'clienttest@fancourier.ro')
    b.append('client_id', '323245')
    b.append('user_pass', 'testareFAN')
    b.append('expeditor', 'expeditor')
    b.append('pers_contact', "Usman")
    b.append('tel', '+9764646116')
    b.append('email', 'itsoxamsa@gmail.com')
    b.append('nr_colete', '5')
    b.append('nr_plicuri', "1")
    b.append('greutate', "1")
    b.append('inaltime', "10")
    b.append('lungime', "10")
    b.append('latime', "10")
    b.append('ora_ridicare', '12:25')
    b.append('data_cmd', "2023-1-27")
    b.append('observatii', "sad")
    b.append('strada', "5")
    b.append('nr', "10")
    b.append('scara', "yes")
    b.append('etaj', "2")
    b.append('ap', "1")
    b.append('localitate', "Albesti-Muru")
    b.append('judet', "Prahova")
    b.append('nume_dest', "usama")
    b.append('mod', "1")


    var c = new FormData()

    c.append('username', 'clienttest@fancourier.ro')
    c.append('client_id', '323245')
    c.append('user_pass', 'testareFAN')
    c.append('mod', 1)
    c.append('expeditor', 'expedsitor')
    c.append('pers_contact', "Ussaman")
    c.append('tel', '+976464611a6')
    c.append('email', 'itsoxamasa@gmail.com')
    c.append('nr_colete', '52')
    c.append('nr_plicuri', "12")
    c.append('greutate', "12")
    c.append('inaltime', "120")
    c.append('lungime', "120")
    c.append('latime', "102")
    c.append('ora_ridicare', '12:45')
    c.append('data', "5.12.2022")
    c.append('observatii', "sad")
    c.append('strada', "5")
    c.append('nr', "10")
    c.append('scara', "yes")
    c.append('etaj', "2")
    c.append('ap', "1")
    c.append('localitate', "Albesti-Muru")
    c.append('judet', "Prahova")
    c.append('nume_dest', "usa2ma")

    c.append('language', "en")
    console.log(a)
    
    
    var x = new FormData()

    x.append('username', 'clienttest@fancourier.ro')
    x.append('client_id', '323245')
    x.append('user_pass', 'testareFAN')
    x.append('AWB', '17859798')
    x.append('language', 'en')
    x.append('display_mode', '4')
    /*
    axios.post('https://www.selfawb.ro/export_comenzi_integrat.php',c).then(res=>{
      console.log(res.data)
    })*/

    axios.post('https://www.selfawb.ro/all/awb_tracking_integrat.php', x).then(res => {


     console.log(res.data)
   
    })


  }


  var allcountries = ["Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea"]

  const [measure, setmeasure] = useState([
    {
      pieces:1,
      length:1,
      height:1,
      width:1,
      weight:1
    }
  ]);
function addpackage() {

    setmeasure(prevState => [...prevState,  {
      pieces: 1,
      length:1,
      height: 1,
      width: 1,
      weight: 1
    }]);
    console.log(measure)
  
}

function changepieces(val,index) {
  val=parseInt(val)
  var temparr=measure;
  temparr[index].pieces=val;
  
}

function changeheight(val,index) {
  val=parseInt(val)
  var temparr=measure;
  temparr[index].height=val;
  
}

function changewidth(val,index) {
  val=parseInt(val)
  var temparr=measure;
  temparr[index].width=val;
  
}

function changeweight(val,index) {
  val=parseInt(val)
  var temparr=measure;
  temparr[index].weight=val;
  
}
function changelength(val,index) {
  val=parseInt(val)
  var temparr=measure;
  temparr[index].length=val;
  
}

function getestimate() {
  var length2=0;
  var pieces2 =0
var width2=0
var height2=0
var weight2=0

var jsonin={
  measure:measure,
  destcountry:name,
  destcity:name2,
  sendercountry:name3,
  sendercity:name4

}
console.log(JSON.stringify(jsonin))
localStorage.setItem('temppackage', JSON.stringify(jsonin))
  measure.forEach((val,index)=>{
   length2=val.length+length2
   pieces2=val.pieces+pieces2
   width2=val.width+width2
   height2=val.height+height2
   weight2=val.weight+weight2
    if(index===measure.length-1){
   window.location.pathname=`calculate/length?${length2}&&pieces?${pieces2}&&width?${width2}&&height?${height2}&&wight?${weight2}&&destcountry?${name2}&&destcity?${name4}&&sendcountry?${name}&&sendcity?${name3}&&packagetype?${packagetype}`
  
    }

  })

}
const [packagetype, setpackagetype] = useState('parcel')
  return (
    <>
      <div className="home">
        <div className="subhome">


          <div>
            <h1>The price machine <br />for <strong>courier services</strong></h1>
            <h2>Compare prices and get amazing discounts from the<br />
              world's largest carriers.</h2>
          </div>
          <img src={group} alt="" />

        </div>
      </div>
      <div className="psending">
        <div className="subsending">
          <div className="heading">
            <div className="text">

              <h1>Package Sending</h1>
              <h2>Compare prices from the world's largest carriers.</h2>
            </div>
            <div className="choose">
              <div className="radio" style={{cursor:'pointer'}} onClick={e=>setpackagetype('parcel2')}>

                <input checked={packagetype==='parcel2'} type="radio" name='asd' className='inputpos' />
                <h1>Paper box</h1>
              </div>
              <div className="radio" style={{cursor:'pointer'}} onClick={e=>setpackagetype('letter')}>

                <input checked={packagetype==='letter'} type="radio" name='asd' className='inputpos' />
                <h1>Document</h1>
              </div>
              <div className="radio" style={{cursor:'pointer'}} onClick={e=>setpackagetype('parcel')}>

                <input checked={packagetype==='parcel'} type="radio" name='asd' className='inputpos' />
                <h1>Pallet</h1>
              </div>

            </div>

          </div>
          <div className="country">
            <div className="parentselect">

              <h1>Sender country</h1>

              <div className="select" >
                <div onClick={e => setoptions('options')} className="start">

                  <h1>{name}</h1>
                </div>
                <div onClick={e => setoptions('options')} className="end">
                  <BsChevronDown className='chev' />
                </div>
                <div className={options}>

                  {
                    allcountries.map(val => (
                      <>

                        <span onClick={e => { setoptionss('options2', val, fr) }}  >{val} </span>
                      </>
                    ))
                  }
                </div>

              </div>

              <h1>Sender city</h1>
              <div className="select" >
                <div onClick={e => setoptions3('options')} className="start">
                  <h1>{name3}</h1>
                </div>
                <div onClick={e => setoptions3('options')} className="end">
                  <BsChevronDown className='chev' />
                </div>
                <div className={options3}>
                  {allcitiessend.length > 0 ?

                    allcitiessend.map((val) => (
                      <>

                        <span onClick={e => { setoptionss3('options2', val, ger) }} >{val} </span>
                      </>
                    ))
                    :
                    <span>Select Locality</span>

                  }
                </div>

              </div>
            </div>

            <div className="circle">
              <VscArrowSwap className='ciricon' />
            </div>
            <div className="parentselect">
              <h1>Destination country</h1>

              <div className="select" >
                <div onClick={e => setoptions2('options')} className="start">


                  <h1>{name2}</h1>
                </div>
                <div onClick={e => setoptions2('options')} className="end">
                  <BsChevronDown className='chev' />
                </div>
                <div className={options2}>
                  {
                    allcountries.map(val => (
                      <>

                        <span onClick={e => { setoptionss2('options2', val, fr) }}  >{val} </span>
                      </>
                    ))
                  }
                </div>

              </div>

              <h1>Destination city</h1>
              <div className="select" >
                <div onClick={e => setoptions4('options')} className="start">

                  <h1>{name4}</h1>
                </div>
                <div onClick={e => setoptions4('options')} className="end">
                  <BsChevronDown className='chev' />
                </div>
                <div className={options4}>


                  {allcitiesdest.length > 0 ?

                    allcitiesdest.map((val) => (
                      <>

                        <span onClick={e => { setoptionss4('options2', val, fr) }}  >{val} </span>
                      </>
                    ))
                    :
                    <span>Select Locality</span>

                  }

                </div>

              </div>

            </div>

         
            <button onClick={e=>getestimate()} >Ask for Offers</button>

          </div>
         
          {measure.length>0?
          measure.map((val,index)=>(
            <>
            <h2>1.Package</h2>
          <div className="package">
            <div className="measure">
              <h1>Piece</h1>
              <div className="box">
                <input onChange={e=>changepieces(e.target.value,index)} placeholder='1' type="number" />

              </div>
            </div>
            <div className="measure">
              <h1>Length</h1>
              <div className="box">

                <input onChange={e=>changelength(e.target.value,index)}  placeholder='1' type="number" />
                <h1>cm</h1>
              </div>
            </div>
            <div className="measure">
              <h1>Height</h1>
              <div className="box">

                <input onChange={e=>changeheight(e.target.value,index)} placeholder='1' type="number" />
                <h1>cm</h1>
              </div>
            </div>
            <div className="measure">
              <h1>width</h1>
              <div className="box">

                <input onChange={e=>changewidth(e.target.value,index)} placeholder='1' type="number" />
                <h1>cm</h1>
              </div>
            </div>
            <div className="measure">
              <h1>Weight</h1>
              <div className="box">

                <input onChange={e=>changeweight(e.target.value,index)} placeholder='1' type="number" />
                <h1>cm</h1>
              </div>
            </div>

            <div className="copy">
              <FiCopy color='#436BFD' fontSize={25} />

            </div>
          </div>
          </>
          ))
          :
          <>
           <h2>1.Package</h2>
         
          </>

          }
         

          <h3 onClick={e=>addpackage()}>+ More packages</h3>

        </div>
      </div>
      <div className="db">
        <div className="subdb">
          <div className="subdb1">
            <h1>
              Tips and tools
            </h1>
            <h2>
              What can help you keep up
              and get ahead
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <div className="subdb2">
            <div className="subdbtext">
              <div className="subdbtext1">
                <div className="icon">
                  <FaCoins className='facoin' />
                </div>
                <div className="content">

                  <h1>Save on shipping</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </h2>
                  <h3>Start saving
                    <BsArrowRight fontSize={18} style={{ marginLeft: "10px" }} /></h3>
                </div>
              </div>

              <div className="subdbtext1">
                <div className="icon">
                  <BsCalendar className='facoin' />
                </div>
                <div className="content">

                  <h1>Take control of your deliveries</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </h2>
                  <h3>Sign up for free
                    <BsArrowRight fontSize={18} style={{ marginLeft: "10px" }} /></h3>
                </div>
              </div>

              <div className="subdbtext1">
                <div className="icon">
                  <IoAirplaneSharp className='facoin' />
                </div>
                <div className="content">

                  <h1>Pause deliveries while you travel</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </h2>
                  <h3>Find out how
                    <BsArrowRight fontSize={18} style={{ marginLeft: "10px" }} /></h3>
                </div>
              </div>

            </div>
            <div className="image">
              <img src={img} alt="" />

            </div>
          </div>
        </div>
        <div className="subhead">
          <h1>Headline</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
          <button>Get shipping support</button>
        </div>

      </div>


    </>
  )
}

export default Home