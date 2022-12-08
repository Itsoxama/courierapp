import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile, FiDelete } from 'react-icons/fi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineArrowLeft, AiFillDelete } from 'react-icons/ai'

import { useState } from 'react'
import { useEffect } from 'react'
import { IoWarningOutline } from 'react-icons/io5'
import { BiHide } from 'react-icons/bi'
import { BsPrinter } from 'react-icons/bs'
import ger from "../../images/german.jpg"
import axios from 'axios'
import { IoCloseSharp } from 'react-icons/io5'
import * as t from '../apis'
const headers={
  apikey:t.apikey,
  apisecret:t.apisecret
}
const Details2 = ({ itemsPerPage }) => {

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


    const [currselect, setcurrselect] = useState('cursel')

    const [addpackage, setaddpackage] = useState("package2")

    const [addpackage2, setaddpackage2] = useState("package2")

    const [addpackage3, setaddpackage3] = useState("package2")
    const [jsonorder, setjsonorder] = useState()
    const [jsonpackage, setjsonpackage] = useState()
    const [pieces, setpieces] = useState(0)
    const [length, setlength] = useState(0)
    const [height, setheight] = useState(0)
    const [width, setwidth] = useState(0)
    const [weight, setweight] = useState(0)
const [userid, setuserid] = useState('')

    useEffect(() => {
        var key=localStorage.getItem('Userkey')
      console.log(key)
      if(key&&key.search('0-9-3988300Sdf0999i84')>=0){
        var t=key.split('_$')
        setuserid(t[1])
      
      
      
      }
        return () => {
          
        }
      }, [])
      



    useEffect(() => {
        var a = localStorage.getItem('orderdetails')
        var b = localStorage.getItem('temppackage')
        b = JSON.parse(b)
        a = JSON.parse(a)
        setjsonorder(a)
        setjsonpackage(b)
        console.log(a)
        setemail(a.email)



        b.measure.forEach(val => {
            setpieces(pieces + val.pieces)
            setlength(length + val.length)
            setheight(height + val.height)
            setwidth(width + val.width)
            setweight(weight + val.weight)


        });




        return () => {

        }
    }, [])

    function setaddpackage2s(val) {
        setaddpackage2(val)
        window.location.pathname='ordershistory'
        
    }
    async function gotonext() {
        var postorder = new FormData

        postorder.append('username', 'clienttest@fancourier.ro')
        postorder.append('client_id', '323245')
        postorder.append('user_pass', 'testareFAN')
        postorder.append('expeditor', 'expeditor')
        postorder.append('pers_contact', jsonorder.sendernumber)
        postorder.append('tel', jsonorder.sendernumber)
        postorder.append('email', email)
        postorder.append('nr_colete', jsonpackage.measure.length)
        postorder.append('nr_plicuri', "1")
        postorder.append('greutate', weight)
        postorder.append('inaltime', height)
        postorder.append('lungime', length)
        postorder.append('latime', width)
        postorder.append('ora_ridicare', jsonorder.ept)
        postorder.append('data_cmd', "2023-1-27")
        postorder.append('observatii', "temporary")
        postorder.append('strada', jsonorder.streetnumber)
        postorder.append('nr', jsonorder.streetnumber)
        postorder.append('scara', "yes")
        postorder.append('etaj', "2")
        postorder.append('ap', "1")
        postorder.append('localitate', jsonorder.sendercity)
        postorder.append('judet', jsonorder.sendercountry)
        postorder.append('nume_dest', jsonorder.recname)
        postorder.append('mod', "1")
        axios.post('https://www.selfawb.ro/all/comanda_curier_integrat.php', postorder).then(res => {
            console.log(typeof(res.data))
          
                setaddpackage2('packagen')
                axios.post('http://localhost:4000/api/order/add',{
                    headers:headers,
                    sendernumber:jsonorder.sendernumber,
                    sendername:jsonorder.sendername,
                    sendercountry:jsonorder.sendercountry,
                    sendercity:jsonorder.sendercity,
                    senderpostalcode:jsonorder.senderpostalcode,
                    senderstreet:jsonorder.senderstreet,
                    sendercomments:jsonorder.sendercomments,
                    recnumber:jsonorder.recnumber,
                    recname:jsonorder.recname,
                    reccountry:jsonorder.reccountry,
                    reccity:jsonorder.reccity,
                    recpostalcode:jsonorder.recpostalcode,
                    recstreet:jsonorder.recstreet,
                    reccomments:jsonorder.reccomments,
                    email:jsonorder.email,
                    measure:jsonpackage.measure,
                    status:'pending',
                    user_id:userid



                }).then(res=>console.log(res))


         
                console.log(res)
                
            
        })


    }

    const [email, setemail] = useState('')
    const [valuecoverage, setvaluecoverage] = useState('')
    const [pass, setpass] = useState('')
    const [cpass, setcpass] = useState('')




    return (
        <div className="luggage">
                  <div className={addpackage2}>
            <div className="packagesub packagesub2">

                <IoCloseSharp className='io' onClick={e => setaddpackage2('package2')} />
                <div className="iconxs">
                    <AiOutlineCheckCircle color='#12B76A'  className='facoin facoin2' />

                </div>
<h1 style={{width:'80%',textAlign:'center'}}>Your Order has been processed and you can view the status in ordershistory</h1>
                <div className="buttons">
                    <button className='submit' onClick={e=>setaddpackage2s('package2')}>Ok</button>
                </div>
            </div>
        </div>
            <div className="sublug">
         
                <div className="sublug1">
                    <div className="lugpart1">
                        <div className="lugbar">
                            <div>

                            </div>
                        </div>
                        <h1 className='newselect2'>Package/Delivery</h1>
                        <h2>Please provide package and delivery details</h2>

                    </div>
                    <div className="lugpart2">

                        <div className="lugbar2 lugbar3">

                        </div>
                        <h1 className='newselect'>Extra services and Payments details</h1>
                        <h2>Please provide extra services and payment details</h2>

                    </div>

                </div>
                <div className="sublug2">
                    <div className="packet1">
                        <h1>Services</h1>
                        <div className="cod">
                            <input type="checkbox" />
                            <h1>Yes, I’d like declared value coverage</h1>
                        </div>
                        <h2>Declared value</h2>
                        <div className="box">

                            <input onChange={e => setvaluecoverage(e.target.value)} placeholder='1' type="text" />
                            <h1>RON</h1>
                        </div>

                        <div className="purnotx">
                            <div className="sp2 startpart">
                                <AiOutlineInfoCircle fontSize={25} className='facoin fav' />


                                <div className="messagee css">
                                    <h1>Information</h1>
                                    <h2>The declared value of package represents the carrier’s maximum liability in connection with the shipment of that package, including any loss or damage relating to that shipment. The declared value must match the package value given in package details. If you want to adjust it, navigate to step one and change the package(s)’ value. In the event of a chaim the declared value must be proven with a purchase invoice or expense statements.</h2>
                                </div>
                            </div>
                        </div>


                        <div className="cod sds">
                            <input type="checkbox" />
                            <h1>Yes, I’d like declared value coverage</h1>
                        </div>
                        <div className="addressbox">
                            <div className="addbox addboxnew">
                                <h4>Account Holder</h4>
                                <input type="text" placeholder='Enter Account Holder' />
                            </div>

                            <div className="addbox addboxnew">
                                <h4>Bank Name</h4>
                                <input type="text" placeholder='Enter Bank Name' />
                            </div>
                            <div className="addbox addboxnew">
                                <h4>Account Number</h4>
                                <input type="text" placeholder='Enter Account Number' />
                            </div>

                            <div className="addbox addboxnew">
                                <h4>Cash on delivery amount</h4>
                                <input type="text" placeholder='1' />
                            </div>

                        </div>

                        <div className="purnotx">
                            <div className="sp2 startpart">
                                <AiOutlineInfoCircle fontSize={25} className='facoin fav' />


                                <div className="messagee css">
                                    <h1>Information</h1>
                                    <h2>The collected amount will be deposited to the provided account in 8 workdays. The cost of this service will appear in the cost summery panel on the right.</h2>
                                    <h1>Information on cash on delivery calculation</h1>
                                </div>

                            </div>
                        </div>




                        <div className="packagesub packj polo pak3">

                            <h1>Invoice address</h1>
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
                            <div className="addressbox">
                                <div className="addbox addboxnew">
                                    <h4>Full name</h4>
                                    <input type="text" placeholder='Enter Full name' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Ente Email</h4>
                                    <input type="text" placeholder='Enter Email' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Country</h4>
                                    <input type="text" placeholder='Enter country name' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Postal Code</h4>
                                    <input type="text" placeholder='Enter Postal Code' />
                                </div>


                                <div className="addbox addboxnew">
                                    <h4>City</h4>
                                    <input type="text" placeholder='Enter city' />
                                </div>
                                <div className="addbox addboxnew">
                                    <h4>Street</h4>
                                    <input type="text" placeholder='Enter street' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Street Number</h4>
                                    <input type="text" placeholder='Enter street number' />
                                </div>


                            </div>


                            <div className="purnotx2">
                                <div className="sp2 startpart">
                                    <IoWarningOutline fontSize={25} className='facoin fav' />


                                    <div className="messagee css2">
                                        <h1>Warning</h1>
                                        <h2>The invoice details provided here can not be changed later. Make sure to enter the correct data!</h2> </div>

                                </div>
                            </div>


                        </div>

                        <div className="packagesub packj polo pak3">

                            <h1>Finalize user account</h1>
                            <h4>With your order we create a user account using the email address you provided,
                                where you can find all of your current and future orders.</h4>

                            <h3>Email</h3>
                            <input value={email} onChange={e => setemail(e.target.value)} className='newinp' type="text" placeholder='Enter email' />
                            <div className="addressbox">
                                <div className="addbox addboxnew">
                                    <h4>Password</h4>
                                    <div className="input" style={{ marginBottom: '25px' }}>
                                        <input onChange={e => setpass(e.target.value)} autocomplete="new-password" type="password" placeholder='Enter password' />
                                        <BiHide className='bihide' />
                                    </div>
                                </div>

                                <div className="addbox addboxnew">
                                    <h4>Retype Password</h4>
                                    <div className="input" style={{ marginBottom: '25px' }}>
                                        <input onChange={e => setcpass(e.target.value)} type="password" placeholder='Retype password' />
                                        <BiHide className='bihide' />
                                    </div>
                                </div>


                            </div>

                            <div className="cod">
                                <input type="checkbox" />
                                <h1>I want to receive notifications about discounts, offers and news (EDM)</h1>
                            </div>
                        </div>

                        <div className="packagesub packj polo pak3">

                            <h1>Discount code</h1>

                            <h4>Do you have a discount coupon? Enter the code here to receive your discount.</h4>
                            <h3>Discount code</h3>
                            <input className='newinp' type="text" placeholder='Enter discount code' />




                        </div>
                        <h1>Сhoose payment method</h1>

                        <div className="purnotx3">
                            <div className="sp2 startpart">
                                <span>
                                    <input type="radio" name='ss' className='facoin fav' /></span>


                                <div className="messagee css5">
                                    <h1>Bank Transfer</h1>

                                    <h2>Your order will be processed after we receive the fee on our bank account. We process payments during office hours only. It might result in changing the pickup date.</h2>

                                </div>

                            </div>
                        </div>

                        <div className="purnotxx">
                            <div className="sp2 startpart">
                                <span>
                                    <input type="radio" name='ss' className='facoin fav' /></span>


                                <div className="messagee css5">
                                    <h1>PayU</h1>

                                    <h2>Your order will be processed immediately after a successful payment.</h2>

                                </div>

                            </div>
                        </div>

                        <button onClick={e => gotonext()} className='continue'>Continue</button>
                    </div>
                    <div className="packeta">
                        <div className="subpack">
                            <h1>Currently selected service <BsPrinter /></h1>
                            <h3>Packeta</h3>
                            <h4>Next workday delivery</h4>
                            <span><h1>1 x Box</h1> <h1>1 kg</h1></span>

                            <span><h1>Shipping Fee</h1> <h1>11.54 RON</h1></span>

                            <div><h1>Net</h1> <h1>11.54 RON</h1></div>
                            <div><p>Gross</p> <p>13.73 RON</p></div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Details2