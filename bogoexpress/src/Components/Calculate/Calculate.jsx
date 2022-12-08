import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import i1 from '../../images/i1.png'
import i2 from '../../images/i2.png'
import { BsFillStarFill } from 'react-icons/bs'
import { VscArrowSwap } from 'react-icons/vsc'
import { BiCheck } from 'react-icons/bi'
const Calculate = () => {


    var data = [
        "Servicii FAN Courier",
        "Standard",
        "RedCode",
        "Express Loco 1H",
        "Express Loco 2H",
        "Express Loco 4H",
        "Express Loco 6H",
        "Cont Colector",
        "Express Loco 1H-Cont Colector",
        "Express Loco 2H-Cont Colector",
        "Express Loco 4H-Cont Colector",
        "Express Loco 6H-Cont Colector",
        "Red code-Cont Colector",
        "Export",
        "CollectPoint",
        "CollectPoint Cont Colector",
        "Produse Albe",
        "Produse Albe-Cont Colector",
        "Transport Marfa",
        "Transport Marfa-Cont Colector",
        "Transport Marfa Produse Albe",
        "Transport Marfa Produse Albe-Cont Colector",
    ]
    const [service, setservice] = useState([
        {
            service: '',
            price: 0
        }
    ])
const [weigh, setweigh] = useState('')
const [destcnty, setdestcnty] = useState('')
const [sendcnty, setsendcnty] = useState('')
    const [fetched, setfetched] = useState(false)
    function gotonext(price,service){



var jsonservice={
    service:service,
    price:price,
    weight:weigh

}
localStorage.setItem('orderinfo',JSON.stringify(jsonservice))



        window.location.pathname='package-details'
    }
    useEffect(() => {
        setservice([])
        var pt;
        var sendcity;
        var sendcountry;
        var destcity;
        var destcountry;
        var length
        var height
        var width
        var weight
        var pieces
        var rt = window.location.pathname.split('/')
        var all = rt[2].split('&&')

        all.forEach((val, index) => {
            var splitting = val.split('%3F')
            if (index + 1 === 1) {
                length = splitting[1]
            }

            else if (index + 1 === 2) {

                pieces = splitting[1]

            }
            else if (index + 1 === 3) {

                width = splitting[1]

            }
            else if (index + 1 === 4) {

                height = splitting[1]

            }
            else if (index + 1 === 5) {

                weight = splitting[1]
                setweigh(weight)

            }
            else if (index + 1 === 6) {

                destcountry = splitting[1]
                setdestcnty(destcountry)

            }
            else if (index + 1 === 7) {

                destcity = splitting[1]

            }
            else if (index + 1 === 8) {

                sendcountry = splitting[1]
                setsendcnty(sendcountry)

            }

            else if (index + 1 === 9) {

                sendcity = splitting[1]



            }
            else if (index + 1 === 10) {

                pt = splitting[1]

                function getrequest2() {
                    var b = new FormData

                    b.append('username', 'clienttest@fancourier.ro')
                    b.append('client_id', '323245')
                    b.append('user_pass', 'testareFAN')
                    
                    b.append('localitate_dest', destcity)
                    b.append('localitate_exp', sendcity)
                    b.append('judet_exp', sendcountry)
                    b.append('judet_dest', destcountry)

                    if (pt === 'parcel' || pt === 'parcel2') {
                        console.log('parcel')

                        b.append('colete', pieces)
                    }
                    else {
                        console.log('doc')
                        b.append('plicuri', pieces)
                    }
                    b.append('greutate', weight)
                    b.append('lungime', length)
                    b.append('latime', width)
                    b.append('inaltime', height)

                    /*
                    axios.post('https://www.selfawb.ro/export_comenzi_integrat.php',c).then(res=>{
                      console.log(res.data)
                    })*/
                    data.forEach(valx => {



                        b.append('serviciu', valx)
                        if (!fetched) {

                            axios.post('https://www.selfawb.ro/all/tarif.php', b).then(res => {

                                if (res.data > 0) {
                                    console.log(res.data)
                                    console.log(valx)
                                    setservice(prevState => [...prevState, {
                                        service: valx,
                                        price:parseInt(res.data) 
                                    }])

                                }
                            })
                            setfetched(true)
                        }
                    });



                }
                getrequest2()

            }


        })

        return () => {

        }
    }, [])

    return (
        <div className="calculate">
            <div className="imgpart">
                <img src={i1} alt="" />
                <h1>Offers</h1>
            </div>
            
           {service.length>0?
           
           <>
           <div className="fromto">
                <span><h1>
                    {sendcnty&&sendcnty

                    }</h1>
                    <VscArrowSwap className='vswap' />
                    <h1>{destcnty&&destcnty

}</h1>
                </span>
                <div className="domestic">
                    <h3>Box <p>•</p>Domestic <p>•</p> Weight: {weigh&&weigh} Kg</h3>
                </div>


            </div>
            {
                service.map((val)=>(
                    <>
                     <div className="offers">
                        <div className="imgfan">
        
                            <img src={i2} alt="" />
                        </div>
                        <div className="optdesc">
                            <div className="starx">
                                <BsFillStarFill className='fillyellow' />
                                <BsFillStarFill className='fillyellow' />
                                <BsFillStarFill className='fillyellow' />
                                <BsFillStarFill className='fillyellow' />
                                <BsFillStarFill className='fillyellow' />
        
                            </div>
                            <p>3-5 workdays (depending on ZIP)</p>
                            <h1>{val.service}</h1>
                            <h3>Parcel Shops cannot be accessed outside of normal business hours. Parcel Terminals can be accessed 24/7.</h3>
                            <h6>
                                <BiCheck className='chkgreen' />
                                Cash on delivery
                                <BiCheck className='chkgreen' />
                                Printer needed
                                <BiCheck className='chkgreen' />
                                Same day collection
                                <BiCheck className='chkgreen' />
                                Value coveragez
        
        
                            </h6>
        
                        </div>
                        <div className="buynow">
                            <h1>{val.price} RON</h1>
                            <button onClick={e=>gotonext(val.price,val,service)} >BUY</button>
                        </div>
        
                    </div></>
                   ))
            }
            </>:<>
           <div class="lds-dual-ring"></div>
           </>

           }


        </div>
    )
}

export default Calculate
