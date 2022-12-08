import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile, FiDelete } from 'react-icons/fi'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsPrinter } from 'react-icons/bs'
import { FiCopy } from 'react-icons/fi'
import ger from "../../images/german.jpg"
import { countries } from './states'
import axios from 'axios'

import * as t from '../apis'
const headers={
  apikey:t.apikey,
  apisecret:t.apisecret
}
const Details = ({ itemsPerPage }) => {
    const [luggage, setluggage] = useState()
    const [jsonorder, setjsonorder] = useState()
    useEffect(() => {
        setjsonorder(JSON.parse(localStorage.getItem('orderinfo')))
        var t = localStorage.getItem('temppackage')
        console.log(JSON.parse(t))
        setluggage(JSON.parse(t))

        return () => {

        }
    }, [])


    function setoptionss(val1, val2, val3) {
        setoptions(val1)
        setimgs(val3)
        setname(val2)

    }
    function setoptionss2(val1, val2, val3) {
        setoptions2(val1)
        setimgs2(val3)
        setname2(val2)

    }
    const [imgs, setimgs] = useState(ger)
    const [options, setoptions] = useState('options2')
    const [name, setname] = useState("Germany")


    const [imgs2, setimgs2] = useState(ger)
    const [options2, setoptions2] = useState('options2')
    const [name2, setname2] = useState("Germany")

    function setaddpackagess() {
        setaddpackage('package2')
        setaddpackage2('packagen')

    }

    function setaddpackagess2() {
        setaddpackage('package2')
        setaddpackage3('packagen')

    }
    const [country, setcountry] = useState("Germany")
    const [states, setstates] = useState()

    useEffect(() => {
     
        return () => {

        }
    }, [])
    const [states2, setstates2] = useState()
    useEffect(() => {
        var a = 'India'
        countries.forEach((val) => {
            if (val.country === a) {
                console.log(val.states)
                setstates2(val.states)
            }
        })

        return () => {

        }
    }, [])



    const [addpackage, setaddpackage] = useState("package2")
    const [addpackage2, setaddpackage2] = useState("package2")
    const [addpackage3, setaddpackage3] = useState("package2")


    var allcountries = ["Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea"]

    const [email, setemail] = useState('')
    const [sendername, setsendername] = useState('')
    const [senderfirstname, setsenderfirstname] = useState('')
    const [sendercountry, setsendercountry] = useState('')
const [sendercity, setsendercity] = useState('')
const [senderpostalcode, setsenderpostalcode] = useState('')
const [senderstreet, setsenderstreet] = useState('')
const [sendernumber, setsendernumber] = useState('')
const [sendercomments, setsendercomments] = useState('')
const [recname, setrecname] = useState('')
const [recfirstname, setrecfirstname] = useState('')
const [reccountry, setreccountry] = useState('')
const [reccity, setreccity] = useState('')
const [recpostalcode, setrecpostalcode] = useState('')
const [recstreet, setrecstreet] = useState('')
const [recnumber, setrecnumber] = useState('')
const [reccomments, setreccomments] = useState('')
const [ept, setept] = useState('')







    function getcities(val) {
        
    setreccountry(val)
        setstates([])
        var a3 = new FormData()
        a3.append('username', 'clienttest@fancourier.ro')
        a3.append('client_id', '323245')
        a3.append('user_pass', 'testareFAN')
        a3.append('judet', val)
        var l
        axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
            var ax = res.data.split("\n")
            console.log(ax)
            ax.forEach(element => {
                l = element.split(',')
                if (l[1] && l[1].length >= 1) {
                    var t = l[1].replaceAll('"', '')
                    setstates(prevState => [...prevState, t]);
                
                }


            });

        })
}

function getcities2(val) {
    
    setsendercountry(val)
    setstates2([])
    var a3 = new FormData()
    a3.append('username', 'clienttest@fancourier.ro')
    a3.append('client_id', '323245')
    a3.append('user_pass', 'testareFAN')
    a3.append('judet', val)
    var l
    axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
        var ax = res.data.split("\n")
        console.log(ax)
        ax.forEach(element => {
            l = element.split(',')
            if (l[1] && l[1].length >= 1) {
                var t = l[1].replaceAll('"', '')
                setstates2(prevState => [...prevState, t]);
            
            }


        });

    })
}


function gotonext() {

    var jsoninfo={
        email:email,
        sendernumber:sendernumber,
        sendername:sendername,
        sendercountry:sendercountry,
        sendercity:sendercity,
        senderpostalcode:senderpostalcode,
        senderstreet:senderstreet,
        sendercomments:sendercomments,
        recnumber:recnumber,
        recname:recname,
        reccountry:reccountry,
        reccity:reccity,
        recpostalcode:recpostalcode,
        recstreet:recstreet,
        reccomments:reccomments,
        ept:ept,

    }


    localStorage.setItem('orderdetails',JSON.stringify(jsoninfo))
    window.location.pathname='package-details2'

    
}
    return (
        <div className="luggage">
            <div className="sublug">
                <div className="sublug1">
                    <div className="lugpart1">
                        <div className="lugbar">

                        </div>
                        <h1>Package/Delivery</h1>
                        <h2>Please provide package and delivery details</h2>

                    </div>
                    <div className="lugpart2">

                        <div className="lugbar2">

                        </div>
                        <h1>Extra services and Payments details</h1>
                        <h2>Please provide extra services and payment details</h2>

                    </div>

                </div>
                <div className="sublug2">
                    <div className="packet1">
                        <h1>Contact e-mail address</h1>
                        <h2>Email</h2>
                        <input type="text" onChange={e => setemail(e.target.value)} placeholder='Enter email ' />

                        <h3>Package details</h3>

                        {luggage && luggage.measure.map(val => (
                            <>
                                <h2 className='mty'>1.Package</h2>
                                <div className="package">
                                    <div className="measure measure2">
                                        <h1>Piece</h1>
                                        <div className="box">
                                            <input value={val.piece} className='inputcm' placeholder='1' type="text" />

                                        </div>
                                    </div>
                                    <div className="measure measure2">
                                        <h1>Length</h1>
                                        <div className="box">

                                            <input value={val.length} className='inputcm' placeholder='1' type="text" />
                                            <h1>cm</h1>
                                        </div>
                                    </div>
                                    <div className="measure measure2">
                                        <h1>Height</h1>
                                        <div className="box">

                                            <input value={val.height} className='inputcm' placeholder='1' type="text" />
                                            <h1>cm</h1>
                                        </div>
                                    </div>
                                    <div className="measure measure2">
                                        <h1>width</h1>
                                        <div className="box">

                                            <input value={val.width} className='inputcm' placeholder='1' type="text" />
                                            <h1>cm</h1>
                                        </div>
                                    </div>


                                </div>
                                <div className="package packagex">
                                    <div className="measure measure2">
                                        <h1>Weight</h1>
                                        <div className="box">
                                            <input value={val.weight} className='inputcm' placeholder='1' type="text" />

                                        </div>
                                    </div>
                                    <div className="measure measure2">
                                        <h1>Package Value</h1>
                                        <div className="box">

                                            <input value={0} className='inputcm' placeholder='1' type="text" />
                                            <h1>cm</h1>
                                        </div>
                                    </div>
                                    <div className="measure measure2">
                                        <h1>Package Contents</h1>
                                        <div className="box">

                                            <input className='inputcm' placeholder='1' type="text" />
                                            <h1>cm</h1>
                                        </div>
                                    </div>

                                    <div className="copy">
                                        <FiCopy color='#436BFD' fontSize={25} />

                                    </div>

                                    <div className="copy copy3">
                                        <RiDeleteBinLine color='#436BFD' fontSize={25} />

                                    </div>


                                </div>
                            </>
                        ))

                        }
                        <h4>+ Add package</h4>
                        <h1>Expected pickup time</h1>
                        <p>To have your parcel picked up the next workday, payments needs to arrive
                            on our account until 14:00</p>
                        <span className='chse'>
                            <form className='parentform parfotm'>
                                <p style={{ marginRight: '30px' }} >
                                    <input type="radio" id="test1" name="radio-group" checked />
                                    <label className='labelm' onClick={e=>setept('12:30')} for="test1">Today 08:30</label>
                                </p>
                                <p style={{ marginRight: '30px' }}>
                                    <input type="radio" id="test2" name="radio-group" />
                                    <label className='labelm' onClick={e=>setept('12:30')} for="test2">Today 08:30</label>
                                </p>
                                <p>
                                    <input type="radio" id="test3" name="radio-group" />
                                    <label className='labelm' onClick={e=>setept('12:30')} for="test3">
                                        Today 08:30</label>
                                </p>

                                <p className='pall'>
                                    <input type="radio" id="test4" name="radio-group" />
                                    <label className='labelm' onClick={e=>setept('12:30')} for="test4">
                                        Today 08:30</label>
                                </p>

                                <p className='pall'>
                                    <input type="radio" id="test5" name="radio-group" />
                                    <label className='labelm' onClick={e=>setept('12:30')} for="test5">
                                        Today 08:30</label>
                                </p>
                            </form>


                        </span>

                        <h1>Order’s email address and phone number</h1>

                        <div className="addressbox">
                            <div className="addbox addboxnew">
                                <h4 className='lastname'>First name</h4>
                                <input type="text" placeholder='Enter first name' />
                            </div>
                            <div className="addbox addboxnew">
                                <h4 className='lastname'>Last name</h4>
                                <input type="text" placeholder='Enter last name' />
                            </div>


                            <div className="addbox addboxnew">
                                <h4 className='lastname'>Email</h4>
                                <input type="text" placeholder='Enter Email' />
                            </div>

                            <div className="addbox addboxnew">
                                <h4 className='lastname'>Phone number</h4>
                                <input type="text" placeholder='Enter phone number' />
                            </div>

                        </div>

                        <div className="packagesub packj polo pak3">

                            <h1>Sender (pickup address)</h1>
                            <form className='parentform'>
                                <p style={{ marginRight: '30px' }} >
                                    <input type="radio" id="testx" name="radio-groupx" checked />
                                    <label for="testx">Individual</label>
                                </p>
                                <p>
                                    <input type="radio" id="testx2" name="radio-groupx" />
                                    <label for="testx2">Company</label>
                                </p>
                            </form>
                            <h3>Sender name</h3>
                            <input onChange={e=>setsendername(e.target.value)} className='recep' type="text" placeholder='Enter sender name' />
                            <div className="addressbox">
                                <div className="addbox addboxnew">
                                    <h4>Last name</h4>
                                    <input type="text" placeholder='Enter last name' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>First name</h4>
                                    <input type="text" placeholder='Enter first name' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Country name</h4>
                                    <select onChange={e => getcities2(e.target.value)} color='gray' className='selectnew' name="cars" id="cars">
                                        {allcountries.map((val) => (

                                            <option  value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>City</h4>
                                    <select color='gray' onChange={e=>setsendercity(e.target.value)} className='selectnew' name="cars" id="cars">
                                        {states2 && states2.map((val) => (

                                            <option value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Postal code</h4>
                                    <input  onChange={e=>setsenderpostalcode(e.target.value)} type="text" placeholder='Enter postal code' />
                                </div>

                              
                                <div className="addbox addboxnew">
                                    <h4>Street</h4>
                                    <input  onChange={e=>setsenderstreet(e.target.value)} type="text" placeholder='Enter street' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Number</h4>
                                    <input  onChange={e=>setsendernumber(e.target.value)} type="text" placeholder='Enter street number' />
                                </div>


                            </div>
                            <h3 style={{ marginTop: '10px' }}>Comments</h3>
                            <textarea  onChange={e=>setsendercomments(e.target.value)} className='comment' name="" id="" cols="30" placeholder='Enter message' rows="10"></textarea>

                        </div>

                        <div className="packagesub packj polo pak3">

                            <h1>Recipient (delivery address)</h1>
                            <form className='parentform'>
                                <p style={{ marginRight: '30px' }} >
                                    <input type="radio" id="testxa" name="radio-groupx" checked />
                                    <label for="testxa">Individual</label>
                                </p>
                                <p>
                                    <input type="radio" id="testx2a" name="radio-groupx" />
                                    <label for="testx2a">Company</label>
                                </p>
                            </form>
                            <h3 >Recipient Name</h3>
                            <input  onChange={e=>setrecname(e.target.value)} className='recep' type="text" placeholder='Enter Recipient Name' />
                            <div className="addressbox">
                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>Last name</h4>
                                    <input type="text" placeholder='Enter last name' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>First name</h4>
                                    <input type="text" placeholder='Enter first name' />
                                </div>


                                <div className="addbox addboxnew">
                                    <h4>Country name</h4>
                                    <select  onChange={e => getcities(e.target.value)} color='gray' className='selectnew' name="cars" id="cars">
                                        {allcountries.map((val) => (

                                            <option  value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>City</h4>
                                    <select onChange={e => setreccity(e.target.value)}  color='gray' className='selectnew' name="cars" id="cars">
                                        {states && states.map((val) => (

                                            <option value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>Postal code</h4>
                                    <input onChange={e => setrecpostalcode(e.target.value)} type="text" placeholder='Enter postal code' />
                                </div>
                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>Street</h4>
                                    <input onChange={e => setrecstreet(e.target.value)} type="text" placeholder='Enter street' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Number</h4>
                                    <input onChange={e => setrecnumber(e.target.value)} type="text" placeholder='Enter street number' />
                                </div>


                            </div>
                            <h3 style={{ marginTop: '10px' }}>Comments</h3>
                            <textarea onChange={e => setreccomments(e.target.value)} className='comment' name="" id="" cols="30" placeholder='Enter message' rows="10"></textarea>

                        </div>
                        <button className='continue' onClick={e => gotonext()}>Continue</button>
                    </div>
                 {jsonorder&&
                    <div className="packeta">
                    <div className="subpack">
                        <h1>Currently selected service <BsPrinter /></h1>
                        <h3>{jsonorder.service.service}</h3>
                        <h4>Next workday delivery</h4>
                        <span><h1>1 x Box</h1> <h1>{jsonorder.weight} kg</h1></span>

                        <span><h1>Shipping Fee</h1> <h1>{jsonorder.price} RON</h1></span>

                        <div><h1>Net</h1> <h1>11.54 RON</h1></div>
                        <div><p>Gross</p> <p>{jsonorder.price+10} RON</p></div>
                    </div>

                </div>

                 }

                </div>

            </div>
        </div>
    )
}

export default Details