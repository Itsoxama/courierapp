import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile } from 'react-icons/fi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import asd from '../../images/asdw.jpg'
import { RiSettings5Line } from 'react-icons/ri'
import { useState } from 'react'
import { useEffect } from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { RiDeleteBinLine } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';
import { IoCloseSharp } from 'react-icons/io5'
import { HiOutlineLocationMarker } from 'react-icons/hi'
// Example items, to simulate fetching from another resources.
import axios from 'axios'
import * as t from '../apis'
const headers={
  apikey:t.apikey,
  apisecret:t.apisecret
}

const Dashboard = () => {
  const [cur, setcur] = useState()
useEffect(() => {
  var key=localStorage.getItem('Userkey')
console.log(key)
if(key&&key.search('0-9-3988300Sdf0999i84')>=0){
  var t=key.split('_$')


  axios.post('http://localhost:4000/api/address/find', {
    headers:headers,
    user_id: t[1]
  }).then(res => {
    setcur(res.data.Address)
  })

}
else{
  window.location.pathname='/'
  
}
  return () => {
    
  }
}, [])


  return (
    <>
      {cur &&
        <Dashboard2 person={cur} />

      }
    </>
  )
}
const Dashboard2 = (cur) => {
  const [userid, setuserid] = useState('')
  useEffect(() => {
    var key=localStorage.getItem('Userkey')
  console.log(key)
  if(key&&key.search('0-9-3988300Sdf0999i84')>=0){
    var t=key.split('_$')
    setuserid(t[1])
  }
  else{
    window.location.pathname='/'
    
  }
    return () => {
      
    }
  }, [])
  const [addressanme, setaddressanme] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [country, setcountry] = useState('')
  const [value, setvalue] = useState('')
  const [contents, setcontents] = useState('')
  const [user_id, setuser_id] = useState('789646313131')
  const [ptype, setptype] = useState('individual')
  const [requesttype, setrequesttype] = useState('add')



  var itemsPerPage = 4
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(cur.person.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cur.person.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cur.person.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const [currselect, setcurrselect] = useState('cursel2')

  const [currselect2, setcurrselect2] = useState('cursel2')

  const [currselect3, setcurrselect3] = useState('cursel2')
  const [currselect4, setcurrselect4] = useState('cursel2')

  useEffect(() => {
    if (window.location.pathname.search('dashboard') >= 0) {
      setcurrselect('cursel')
      setcurrselect2('cursel2')
      setcurrselect3('cursel2')
      setcurrselect4('cursel2')
    }


    return () => {

    }
  }, [])
  const [updateid, setupdateid] = useState('')
  function addaddress() {

    if (requesttype === 'add') {

      axios.post('http://localhost:4000/api/address/add', {
        headers:headers,
        addressname: addressanme,
        fullname: fullname,
        email: email,
        number: number,
        country: country,
        value: value,
        user_id: userid,
        contents, contents,
        type: ptype,
      })
        .then((res) => {
          console.log(res)
          window.location.reload()
        }).catch(err => {
          console.log(err)
        })
    } else {
      axios.post('http://localhost:4000/api/address/update', {
        headers:headers,
        addressname: addressanme,
        fullname: fullname,
        email: email,
        _id: updateid

      })
        .then((res) => {
          console.log(res)
          window.location.reload()
        }).catch(err => {
          console.log(err)
        })


    }


  }
  function setaddpackagen(val, item) {

    setrequesttype('update')
    setupdateid(item._id)
    setaddpackage(val)
    setaddressanme(item.addressname)
    setfullname(item.fullname)
    setemail(item.email)
    setnumber(item.number)
    setcountry(item.country)
    setcontents(item.contents)
    setptype('individual')

  }

  function setaddpackagen2(val) {
    setrequesttype('add')
    setaddpackage(val)
    setaddressanme('')
    setfullname('')
    setemail('')
    setnumber('')
    setcountry('')
    setcontents('')
    setptype('individual')

  }
  function logout() {
    
  localStorage.removeItem('Userkey')
  window.location.pathname='/'
    
  }
  const [addpackage, setaddpackage] = useState("package2")
  return (
    <div className="dashboard">
      <div className={addpackage}>
        <div className="packagesub pak3">

          <IoCloseSharp className='io' onClick={e => setaddpackage('package2')} />
          <div className="icon">
            <HiOutlineLocationMarker className='facoin' />

          </div>

          <h1>Add new address</h1>
          <form className='parentform'>
            <p style={{ marginRight: '30px' }} >
              <input type="radio" id="test1" name="radio-group" checked />
              <label for="test1">Individual</label>
            </p>
            <p>
              <input type="radio" id="test2" name="radio-group" />
              <label for="test2">Company</label>
            </p>
          </form>
          <h3>Address name</h3>
          <input value={addressanme} onChange={e => setaddressanme(e.target.value)} type="text" placeholder='Enter address name' />
          <div className="addressbox">
            <div className="addbox">
              <h4>Full name</h4>
              <input value={fullname} onChange={e => setfullname(e.target.value)} type="text" placeholder='Enter full name' />
            </div>

            <div className="addbox">
              <h4>Email</h4>
              <input value={email} onChange={e => setemail(e.target.value)} type="text" placeholder='Enter Your Email' />
            </div>

            <div className="addbox">
              <h4>Phone number</h4>
              <input value={number} onChange={e => setnumber(e.target.value)} type="text" placeholder='Enter phone number' />
            </div>

            <div className="addbox">
              <h4>Country name</h4>
              <input value={country} onChange={e => setcountry(e.target.value)} type="text" placeholder='Enter Your Country' />
            </div>

            <div className="addbox">
              <h4>Package value</h4>
              <input value={value} onChange={e => setvalue(e.target.value)} type="text" placeholder='Enter value' />
            </div>

            <div className="addbox">
              <h4>Package contents</h4>
              <input value={contents} onChange={e => setcontents(e.target.value)} type="text" placeholder='Enter contents' />
            </div>
          </div>
          <div className="buttons">
            <button className='cancel'>Cancel</button>
            <button className='submit' onClick={e => addaddress()}>Add</button>
          </div>
        </div>


      </div>
      <div className="subdash">
        <div className="subdash1">
          <div className="dashmenu">
            <h1 onClick={e => window.location.pathname = 'ordershistory'} > <FiFile fontSize={22} className='fifi' /> Orders History</h1>
            <h1 onClick={e => window.location.pathname = 'dashboard'} className={currselect}><FiHome fontSize={22} className='fifi' /> Saved Addresses</h1>
            <h1 onClick={e => window.location.pathname = 'packages'} > <TbBrandBitbucket fontSize={22} className='fifi' /> Saved Packages</h1>
            <h1 onClick={e => window.location.pathname = 'settings'} > <RiSettings5Line fontSize={22} className='fifi' /> Profile Settings</h1>


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
            <FiLogOut onClick={e=>logout()} fontSize={15} />
          </div>
        </div>
        <div className="subdash2">
          <div className="savedadd">
            <h1>Saved Addresses</h1>
            <h2>Save frequently used addresses here, to save you time when placing orders.</h2>
            <span>
              <div className="searches">
                <div className="search">
                  <FiSearch className='fis' />
                  <input placeholder='Search' type="text" />

                </div>
              </div>
              <button style={{ width: '198px' }} onClick={e => setaddpackagen2('packagen')}>
                + Add new address

              </button>


            </span>

            <div className="tablex">
              <>
                <div className="tablerow" >
                  <input type="checkbox" className='no2' />
                  <h1 className='no no2' >No</h1>
                  <h1 className='namew no2'>Company name</h1>
                  <h1 className='addw no2'>Addresses</h1>

                  <h1 className='no2'>Set as Default...</h1>
                </div>
                {currentItems &&
                  currentItems.map((item, index) => (
                    index % 2 != 0 ?
                      <div className="tablerow">
                        <input type="checkbox" />
                        <h1 className='no' >{item.no}</h1>
                        <h1 className='namew'>{item.fullname}</h1>
                        <h1 className='addw'>{item.addressname}</h1>
                        <h1><input type="checkbox" checked={item.pa} /> Pickup address</h1>

                        <h1><input type="checkbox" checked={item.da} /> Delivery address</h1>
                        <h1><input type="checkbox" checked={item.ia} /> Invoice address</h1>

                        <h3 color='#344054' style={{ cursor: "pointer", width: '100px' }} onClick={e => setaddpackagen('packagen', item)}    ><FiEdit2 color='#344054' /></h3>

                        <h3 color='#344054' ><RiDeleteBinLine color='#344054' /></h3>
                      </div> :
                      <div className="tablerow" style={{ backgroundColor: "#F9FAFB" }}>
                        <input type="checkbox" />
                        <h1 className='no' >{item.no}</h1>
                        <h1 className='namew'>{item.fullname}</h1>
                        <h1 className='addw'>{item.addressname}</h1>
                        <h1><input type="checkbox" checked={item.pa} /> Pickup address</h1>

                        <h1><input type="checkbox" checked={item.da} /> Delivery address</h1>
                        <h1><input type="checkbox" checked={item.ia} /> Invoice address</h1>

                        <h3 color='#344054' style={{ cursor: "pointer", width: '100px' }} onClick={e => setaddpackagen('packagen', item)}   ><FiEdit2 color='#344054' /></h3>

                        <h3 color='#344054' ><RiDeleteBinLine color='#344054' /></h3>
                      </div>
                  ))}
              </>
              <ReactPaginate
                breakLabel="..."
                nextLabel={<AiOutlineArrowRight className='ert' />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<AiOutlineArrowLeft className='ert2' />}
                renderOnZeroPageCount={null}
              />
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Dashboard