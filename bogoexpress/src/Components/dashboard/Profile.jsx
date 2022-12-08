import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile } from 'react-icons/fi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import asd from '../../images/asdw.jpg'
import { RiSettings5Line } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { useEffect } from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';
import visa from '../../images/visa.png'
import card from '../../images/card.png'
import {AiFillCheckCircle,AiOutlineCheckCircle} from 'react-icons/ai'
import mc from '../../images/mc.png'
import { HiOutlineMail } from 'react-icons/hi'
import {FiDownloadCloud} from 'react-icons/fi'
import { BsCalendar, BsChevronDown } from 'react-icons/bs'
import axios from 'axios'
// Example items, to simulate fetching from another resources.
import * as t from '../apis'
const headers={
  apikey:t.apikey,
  apisecret:t.apisecret
}
const Profile = ({ itemsPerPage }) => {
    
function setaddpackagess() {
    setaddpackage('package2')
    setaddpackage2('packagen')
    
}
  
function setaddpackagess2() {
    setaddpackage('package2')
    setaddpackage3('packagen')
    
}

const [userdata, setuserdata] = useState()
useEffect(() => {


    var key=localStorage.getItem('Userkey')
    console.log(key)
    if(key&&key.search('0-9-3988300Sdf0999i84')>=0){
    var k=key.split('_$')
      
axios.post('http://localhost:4000/api/signup/find',{
    headers:headers,
    _id:k[1],
}).then(res=>{
    console.log(res)
    setuserdata(res.data.User)
})
    }
    else{
      window.location.pathname='/'
      
    }

  return () => {
    
  }
}, [])

    function logout() {
    
        localStorage.removeItem('Userkey')
        window.location.pathname='/'
          
        }
    const [currselect, setcurrselect] = useState('cursel')

    const [addpackage, setaddpackage] = useState("package2")
    
    const [addpackage2, setaddpackage2] = useState("package2")
    
    const [addpackage3, setaddpackage3] = useState("package2")
   const [emaild, setemaild] = useState('')
   const [passd, setpassd] = useState('')
   

function deleteacc() {
    axios.post('http://localhost:4000/api/signup/delete',{
        headers:headers,
        email:emaild,
        password:passd
    }).then(res=>{
        console.log(res)
        if(res.data==='invalid'){
            alert('Invalid email or password')
        }else{
            logout()
        }

    })
    
}
    return (
      <>
      {userdata&&
        <div className="dashboard">
        <div className={addpackage}>
            <div className="packagesub">

                <IoCloseSharp className='io' onClick={e => setaddpackage('package2')} />
        
<img src={card} alt="" />
<h1>Update payment method</h1>
<h5>Update your card details.</h5>
                <div className="addressbox">
                    <div className="addbox addbox3">
                        <h4>Name on card</h4>
                        <input type="text" placeholder='Enter  name' />
                    </div>

                    <div className="addbox addbox4">
                        <h4>Expiry</h4>
                        <input type="text" placeholder='Enter Expiry' />
                    </div>
                    <div className="addbox addbox3">
                        <h4>Card Number</h4>
                        <input type="text" placeholder='Card Number' />
                    </div>

                    <div className="addbox addbox4">
                        <h4>CVV</h4>
                        <input type="text" placeholder='Enter CVV' />
                    </div>

             
                </div>
                <div className="buttons">
                    <button className='cancel' onClick={e=>setaddpackagess2()}>Delete card</button>
                    <button className='submit' onClick={e=>setaddpackagess()}>Update</button>
                </div>
            </div>
        </div>
        
        <div className={addpackage2}>
            <div className="packagesub packagesub2">

                <IoCloseSharp className='io' onClick={e => setaddpackage2('package2')} />
                <div className="iconxs">
                    <AiOutlineCheckCircle color='#12B76A'  className='facoin facoin2' />

                </div>
<h1 style={{width:'80%',textAlign:'center'}}>Your payment card
was successfully saved </h1>
                <div className="buttons">
                    <button className='submit' onClick={e=>setaddpackage2('package2')}>Ok</button>
                </div>
            </div>
        </div>
        
        <div className={addpackage3}>
            <div className="packagesub packagesub2">

                <IoCloseSharp className='io' onClick={e => setaddpackage2('package2')} />
                <div className="iconxsx">
                    <RiDeleteBinLine color='#D92D20'  className='facoin facoin5' />

                </div>
<h1 style={{width:'80%',textAlign:'center'}}>Delete payment card </h1>
<h6>Are you sure you want to delete your payment card? This action cannot be undone.</h6>
                <div className="buttons">
                <button className='cancel' onClick={e=>setaddpackage3('package2')}>Cancel</button>
               
                    <button className='submit' onClick={e=>setaddpackage3('package2')}>Delete</button>
                </div>
            </div>
        </div>
        <div className="subdash">
            <div className="subdash1">
                <div className="dashmenu">
                    <h1  onClick={e => window.location.pathname = 'ordershistory'} > <FiFile fontSize={22} className='fifi' /> Orders History</h1>
                    <h1 onClick={e => window.location.pathname = 'dashboard'}    ><FiHome fontSize={22} className='fifi' /> Saved Addresses</h1>
                    <h1 onClick={e => window.location.pathname = 'packages'} > <TbBrandBitbucket fontSize={22} className='fifi' /> Saved Packages</h1>
                    <h1  onClick={e => window.location.pathname = 'settings'}  className={currselect}> <RiSettings5Line fontSize={22} className='fifi' /> Profile Settings</h1>


                </div>
                <div className="feature">
                    <h1>New features available!</h1>
                    <h2>Check out our new updates. </h2>
                    <img src={asd} alt="" />
                    <span><h4>Dismiss</h4> <h3>Whats new?</h3></span>


                </div>
                <div className="email">
                    <div className="or">
                        OR
                    </div>
                    <div className="emaildetails">
                        <h1>Olivia Rhye</h1>
                        <h3>olivia@untitledui.com</h3>

                    </div>
                    <FiLogOut fontSize={15} onClick={e=>logout()} />
                </div>
            </div>
            <div className="subdash2">
                <div className="savedadd">
                    <h1>Profile Settings</h1>
                    <h4>Personal info</h4>
                    <h3>Update your personal details here.</h3>
                    <div className="firstfield">
                        <h1>Name</h1>
                        <span className='firstinpx'>
                        <input value={userdata.name} className='firstinp2' type="text" />
                        
                        <input className='firstinp2' type="text" />
                        </span>
                    </div>
                    <div className="firstfield">
                        <h1>Email address</h1>
                        <input value={userdata.email}  className='firstfieldinput2' type="text" />
                    </div>
                    <div className="firstfield">
                        <h1>Phone number</h1>
                        <input value={userdata.phone}  className='firstfieldinput2' type="text" />
                    </div>


                    <h4>Password</h4>
                    <h3>Please enter your current password to change your password.</h3>
                    <div className="firstfield">
                        <h1>Current Password</h1>
                        <input value={" "} className='firstfieldinput2' type="password" />
                    </div>

                    <div className="firstfield">
                        <h1>New password</h1>
                        <input className='firstfieldinput2' type="password" />
                    </div>
                    <div className="firstfield" style={{borderBottom:'1px solid #D0D5DD ',marginBottom:'25px' }}>
                        <h1>Confirm new password</h1>
                        <input className='firstfieldinput2' type="password" />
                    </div>
                    <div className="purnot">
                      <div className="startpart">
                      <div className="icon3">
                            <HiOutlineMail fontSize={25} className='facoin' />


                        </div>
                        <div className="messagee">
                            <h1>Stay up to date with the latest news and updates</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        </div>
                      </div>
                      <div className="endpart">
                            
                        <button>Subscribe</button>
                        <IoCloseSharp className='ioc' />
                        </div>
                    </div>
                    
                    <h4>Notification settings</h4>
                    <h3>We may still send you important notifications about your account outside of your notification settings.</h3>
                    <div className="firstfield">
                        <div className="parta">
                            <h1>Notification settings</h1>
                            <h2>These are notifications to remind you of updates you might have missed.</h2>

                        </div>
                        <div className="partb">
                            
                    <p style={{ marginRight: '30px' }} >
                        <input type="radio" id="testx1" name="radio-group" checked />
                        <label for="testx1">Send to my account email</label>
                    </p>
                    <p style={{ marginRight: '30px' }}>
                        <input type="radio" id="testx2" name="radio-group" />
                        <label for="testx2">Send to my account email</label>
                    </p>
                    <p>
                        <input type="radio" id="testx3" name="radio-group" />
                        <label for="testx3">
                        Send to my account email</label>
                    </p>

                        </div>

                    </div>
                    <div className="firstfield">
                        <div className="parta">
                            <h1>SMS settings</h1>
                           <h2>These are notifications to remind you of updates you might have missed.</h2>
                        </div>
                        <div className="partb">
                            
                    <p style={{ marginRight: '30px' }} >
                        <input type="radio" id="testx1" name="radio-group" checked />
                        <label for="testx1">Send to my account email</label>
                    </p>
                 
                    <p>
                        <input type="radio" id="testx3" name="radio-group" />
                        <label for="testx3">
                        Send to my account email</label>
                    </p>

                        </div>

                    </div>
                    <h4>Payment method</h4>
                   <h3>Update your billing details address.</h3>
                   <div className="firstfield">
                        <div className="parta">
                            <h1>Card details</h1>
                      <h2>Select default payment method.</h2>
                        </div>
                        <div className="partb">
                        <div className="purnot" style={{alignItems:'flex-start!important'}}>
                      <div className="startpart">
               <div className="visadiv">
                        
                      <img className='visa' src={visa} alt="" />
                      </div>


                        <div className="messagee">
                            <h1>Visa ending in 1234</h1>
                            <h2>Expiry 06/2024</h2>
                            <span><h3>Set as default</h3> <h1  style={{cursor:'pointer'}}  onClick={e=>setaddpackage('packagen')}>Edit</h1></span>
                        </div>
                      </div>
                      <div className="endpart">
                            
                        <AiFillCheckCircle className='ioc' />
                        </div>
                    </div>
                    <div className="purnot2" style={{alignItems:'flex-start!important'}}>
                      <div className="startpart">
               <div className="visadiv">
                        
                      <img className='visa' src={mc} alt="" />
                      </div>


                        <div className="messagee">
                            <h1>Mastercard ending in 1234</h1>
                            <h2>Expiry 06/2024</h2>
                            
                            <span><h3>Set as default</h3> <h1  style={{cursor:'pointer'}}  onClick={e=>setaddpackage('packagen')}>Edit</h1></span>
                        </div>
                      </div>
                      <div className="endpart">
                            
                        <AiFillCheckCircle className='ioc' />
                        </div>
                    </div>
                    <h1 style={{cursor:'pointer'}} onClick={e=>setaddpackage('packagen')}>+ Add new payment method</h1>
                   

                        </div>

                    </div>
                    
                    <h4 className='downdata'  style={{paddingTop:'25px',borderTop:'1px solid #D0D5DD'}}>Data management settings <button><FiDownloadCloud /> Download my data</button></h4>
                   <h3 style={{paddingBottom:'25px',borderBottom:'1px solid #D0D5DD'}}>Download your personal data. Use this button below to download all your data in .csv format.</h3>
                   <h4  >Delete your profile and personal data</h4>
                   <h3 style={{paddingBottom:'25px',borderBottom:'1px solid #D0D5DD'}}>To delete your profile and personal data, enter your current password and click on the button below.</h3>
                   <div className="firstfield">
                        <h1>Email address</h1>
                        <input onChange={e=>setemaild(e.target.value)} className='firstfieldinput2' type="text" />
                    </div>
                    <div className="firstfield">
                        <h1>Password</h1>
                        <input onChange={e=>setpassd(e.target.value)}  className='firstfieldinput2' type="password" />
                    </div>
                    <button onClick={e=>deleteacc()} className='delete'>Delete</button>

                </div>

            </div>

        </div>

    </div>}
      </>
    )
}

export default Profile