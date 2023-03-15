import React, { useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

const ProductDetails = () => {

    const photos = ['assets/img/featured/banana.png', 'assets/img/featured/banana2.png', 'assets/img/featured/banana3.png']
    const sizes = ['small', 'medium', 'big'];
    const ratting = 4;

    const [showImg, setShowImg] = useState(photos[0]);
    const [selectdedSize, setSelectdedSize] = useState(sizes[1]);
    const [count, setCount] = useState(1);

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }


    return (
        <div className='productdetailsmargin' >
            <div class="flex mobileflex ">
                <div style={{ flexBasis: '60%', }} className="">
                    <div style={{ padding: '0px 10px', position: 'relative' }} className=''>
                        <img style={{ padding: '0px auto', margin: '0px auto' }} className='img' src={showImg} alt="fruit"></img>
                        <h1 style={{ margin: '2px', height: '60px', width: '60px', display: 'flex', alignItems: 'center', justifyContent: "center", borderRadius: '50%', position: 'absolute', top: '20px', right: '20px', fontWeight: '600', backgroundColor: 'orange', padding: "" }} >-40%</h1>
                    </div>
                    <div style={{ padding: '0px 10px', margin: '0px auto' }} class="flex" >
                        {
                            photos.map(photo =>
                                <div style={{ margin: '2px', }}>
                                    <img onClick={() => setShowImg(photo)} style={{ backgroundColor: photo === showImg ? "GreenYellow" : '', padding: '10px', margin: '0px auto', maxHeight: '150px', width: 'auto', border: '1px solid gray', borderRadius: '5px' }} className='' src={photo} alt="fruit"></img>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div style={{ flexBasis: '40%', }} className="">
                    <div style={{ margin: '20px' }}>
                        <p>Fresh Fruits</p>
                        <h1 style={{ fontSize: '50px', fontWeight: '600', }}>Fresh Banana</h1>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <div style={{ margin: '0 10px' }}>
                                <span style={{ padding: '0 3px', color: ratting >= 1 ? 'orange' : "gray" }} class="fa fa-star checked"></span>
                                <span style={{ padding: '0 3px', color: ratting >= 2 ? 'orange' : "gray" }} class="fa fa-star checked"></span>
                                <span style={{ padding: '0 3px', color: ratting >= 3 ? 'orange' : "gray" }} class="fa fa-star checked"></span>
                                <span style={{ padding: '0 3px', color: ratting >= 4 ? 'orange' : "gray" }} class="fa fa-star"></span>
                                <span style={{ padding: '0 3px', color: ratting >= 5 ? 'orange' : "gray" }} class="fa fa-star"></span>
                            </div>
                            <div>
                                <p>8 Ratting</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'start', }}>
                            <div style={{ margin: '0 10px' }}>
                                <p style={{ fontSize: '20px', color: 'gray', textDecoration: 'line-through' }}>$16</p>
                            </div>
                            <div>
                                <span style={{ fontSize: '36px', color: 'red', fontWeight: '500' }}>$12</span><span style={{ fontSize: '16px', color: 'gray' }}> /per kg</span>
                            </div>
                        </div>

                        <p> <span>Category: </span> <span>Fruit</span> </p>
                        <p> <span>Product ID: </span> <span>FrBan10</span> </p>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
                            <div style={{ color: 'black', fontWeight: '600', whiteSpace: 'nowrap' }}>SIZE :</div>
                            <div style={{ padding: '0px 10px', }} class="flex" >
                                {
                                    sizes.map(size =>
                                        <div style={{ margin: '4px', }}>
                                            <h3 onClick={() => setSelectdedSize(size)} style={{ border: size === selectdedSize ? " 2px solid orange" : '1px solid gray', padding: '10px', borderRadius: '5px', margin: '0px auto', }} className='' >{size}</h3>
                                        </div>
                                    )
                                }

                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
                            <div style={{ color: 'black', fontWeight: '600', whiteSpace: 'nowrap' }}>Quantity :</div>
                            <div style={{ padding: '0px 20px', alignItems: 'center' }} class="flex">
                                <div style={{ margin: '4px', }}>
                                    <button disabled={count < 2 ? true : false} onClick={() => setCount(count - 1)} style={{ color: 'black', border: '1px solid gray', borderRadius: '20%', padding: '0 13px', margin: '0px auto', }} className='' >-</button>
                                </div>
                                <div style={{ margin: '4px', }}>
                                    <h3 style={{ border: '2px dashed gray', padding: '10px 30px', margin: '0px auto', }} className='' >{count}</h3>
                                </div>
                                <div style={{ margin: '4px', }}>
                                    <button onClick={() => setCount(count + 1)} style={{ color: 'black', border: '1px solid gray', borderRadius: '20%', padding: '0 11px', margin: '0px auto', }} className='' >+</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ maxWidth: '220px', marginTop: '60px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: "10px auto" }} >
                                <button style={{ color: 'white', backgroundColor: 'orange', fontWeight: '500', borderRadius: '5px', padding: '0 20px', marginRight: '5px  ', width: '100%', display: 'inline-flex', alignItems: 'center' }} className='' ><BsCartPlus></BsCartPlus><p style={{ color: 'black', padding: ' 5px' }}></p>ADD TO CART </button>
                                <button style={{ color: 'White', backgroundColor: 'deeppink', fontWeight: '700', border: '', borderRadius: '5px', padding: '4px', margin: '0', display: 'inline-flex', alignItems: 'center', fontSize: '25px' }} className='' ><AiOutlineHeart></AiOutlineHeart><p></p> </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', margin: "10px auto" }} >
                                <button style={{ color: 'black', backgroundColor: 'lawngreen', fontWeight: '700', borderRadius: '5px', width: '100%', margin: '0px ', display: 'block', alignItems: 'center', textAlign: 'center' }} className='' > BUY NOW</button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '30px 0px' }}>
                            <p style={{ color: 'black', fontWeight: '600', whiteSpace: 'nowrap' }}>Share this on :</p>
                            <div style={{ display: 'flex', padding: '0px 20px', alignItems: 'center' }}>
                                <svg style={{ margin: '8px', padding: '0 0' }} xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" width="7%" height="7%"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z" /><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z" /></svg>
                                <svg style={{ margin: '8px', padding: '0 0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" width="7%" height="7%"><defs><linearGradient id="a" x1="-1.84" x2="32.16" y1="30.47" y2="-3.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed576" /><stop offset=".26" stop-color="#f47133" /><stop offset=".61" stop-color="#bc3081" /><stop offset="1" stop-color="#4c63d2" /></linearGradient></defs><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="url(#a)" rx="6.48" ry="6.48" /><g data-name="&lt;Group&gt;"><path fill="#fff" d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z" data-name="&lt;Compound Path&gt;" /><path fill="#fff" d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z" data-name="&lt;Compound Path&gt;" /><path fill="#fff" d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z" data-name="&lt;Path&gt;" /></g></g></g></svg>
                                <svg style={{ margin: '8px', padding: '0 0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="7%" height="7%"><path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z" /></svg>
                            </div>
                        </div>

                        <div className='my-8 lg:'>
                            <div className='flex items-center my-2  mx-auto'>
                                <CiLocationOn className='inline -ml-1 text-xl text-gray-500'></CiLocationOn>
                                <p className=' font-semibold ml-2'>Delivery in : Select your location </p>
                            </div>
                            <div className='flex items-center my-2  mx-auto'>
                                <BsTruck className='inline  text-xl text-gray-500'></BsTruck>
                                <p className=' font-semibold ml-2'>Stander delivery time:  3 - 7 days </p>
                            </div>
                            <div className='flex items-center my-2  mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" width="6%" height="6%"><path fill="#1e1f27" d="M304.683 328.777a7.5 7.5 0 0 0 7.5 7.5h22.06a16.08 16.08 0 0 1-14.203 8.571h-7.857a7.5 7.5 0 0 0-5.424 12.68l31.428 32.906a7.5 7.5 0 1 0 10.848-10.36l-20.457-21.419a31.187 31.187 0 0 0 21.61-22.378h5.21a7.5 7.5 0 0 0 0-15h-5.207a30.896 30.896 0 0 0-3.568-8.571h8.774a7.5 7.5 0 0 0 0-15h-43.214a7.5 7.5 0 0 0 0 15h7.857a16.08 16.08 0 0 1 14.203 8.57h-22.06a7.5 7.5 0 0 0-7.5 7.5ZM474.5 235.76H285.618l-5.864-57.817a72.455 72.455 0 0 0-8.085-26.487l-3.266-6.146-.122-.239c-.015-.032-.032-.064-.048-.095l-27.425-54.242a27.279 27.279 0 0 0-23.163-14.948 7.898 7.898 0 0 0-.833.01l-11.727.796q-52.71 3.577-105.416 7.145L84.04 84.802a242.448 242.448 0 0 1-7.736-.367c-1.833-.117-3.703-.261-5.667-.432a16.465 16.465 0 0 0-12.652-14.288L9.322 57.525a7.5 7.5 0 0 0-3.644 14.551L54.41 84.284l.165.039a1.501 1.501 0 0 1 1.131 1.794L31.433 193.203a1.498 1.498 0 0 1-1.794 1.131l-20.48-4.643a7.5 7.5 0 1 0-3.317 14.63l20.481 4.642a16.62 16.62 0 0 0 3.679.414 16.515 16.515 0 0 0 16.06-12.858l.12-.53 14.419 9.963a47.153 47.153 0 0 0 11.67 5.866l20.09 6.85a19.865 19.865 0 0 0-8.638 17.995c.01.197.027.395.052.597a19.913 19.913 0 0 0 19.83 18.047c.233 0 .47-.004.705-.012q6.567-.228 13.138-.46a20.983 20.983 0 0 0 25.719 28.932l12.413-4.246v137.68a37.542 37.542 0 0 0 37.5 37.5H474.5a37.542 37.542 0 0 0 37.5-37.5V273.26a37.542 37.542 0 0 0-37.5-37.5Zm-370.71 4.544a4.946 4.946 0 0 1-5.086-4.509 5.324 5.324 0 0 0-.018-.173l-.003-.052a4.922 4.922 0 0 1 3.696-5.21c1.367-.345 3.862-1.134 7.81-2.391 1.619-.516 3.478-1.109 4.91-1.55l25.8 8.796-5.766 3.994q-15.678.555-31.344 1.095Zm53.165 22.894-18.66 6.382a5.994 5.994 0 0 1-7.757-4.26 6.057 6.057 0 0 1 2.533-6.435l7.863-5.447a7.493 7.493 0 0 0 2.12-1.47l14.072-9.748 8.915 5.076a37.345 37.345 0 0 0-9.086 15.902Zm.525-38.036a7.498 7.498 0 0 0-1.29-.581l-38.334-13.07-.109-.037-40.655-13.86a32.188 32.188 0 0 1-7.968-4.005l-17.38-12.01a7.499 7.499 0 0 0-2.073-1.002l18.536-81.77c.148.022.295.05.447.063a258.045 258.045 0 0 0 15.305.916c.229.007.465.004.697-.012l16.03-1.092q52.712-3.563 105.415-7.144l11.261-.765a12.267 12.267 0 0 1 10.055 6.7l27.426 54.241.24.472a10 10 0 0 0 .074.143l3.263 6.14a57.483 57.483 0 0 1 6.413 20.995l5.707 56.276h-18.362l-5.065-41.108a7.498 7.498 0 0 0-3.344-5.364l-8.811-5.749c-.049-.033-.093-.07-.143-.103l-23.072-15.042a22.108 22.108 0 0 0-31.353 7.714 21.907 21.907 0 0 0-2.537 7.294c-.066.377-.118.767-.154 1.144a21.421 21.421 0 0 0-.129 2.353 21.918 21.918 0 0 0 8.43 17.373l56.864 44.77.02.016 11.905 9.374a9.525 9.525 0 0 1 2.892 3.727 9.796 9.796 0 0 1 .593 5.93 9.692 9.692 0 0 1-.744 2.147c-.016.036-.036.07-.051.106a9.647 9.647 0 0 1-8.68 5.357 9.553 9.553 0 0 1-4.78-1.268Zm110.228 56.745q.472-.563.905-1.147h177.353A29.61 29.61 0 0 0 467 301.794v86.872a29.61 29.61 0 0 0-21.034 21.034H221.614a29.61 29.61 0 0 0-21.034-21.034v-86.872a29.61 29.61 0 0 0 21.034-21.034h3.204l11.782 6.708a24.698 24.698 0 0 0 31.108-5.561ZM235.65 224.27l-40.39-31.799a7.019 7.019 0 0 1-2.69-5.573 6.549 6.549 0 0 1 .041-.738c.008-.063.012-.114.018-.177.012-.064.022-.128.032-.192a6.947 6.947 0 0 1 .814-2.35 7.108 7.108 0 0 1 10.078-2.481l6.41 4.18.028.02 22.661 14.785ZM497 417.201a22.526 22.526 0 0 1-22.5 22.5H193.08a22.526 22.526 0 0 1-22.5-22.5V273.26a22.548 22.548 0 0 1 9.204-18.14l28.11 16.004a7.487 7.487 0 0 0-.314 2.136 14.517 14.517 0 0 1-14.5 14.5 7.5 7.5 0 0 0-7.5 7.5v99.94a7.5 7.5 0 0 0 7.5 7.5 14.517 14.517 0 0 1 14.5 14.5 7.5 7.5 0 0 0 7.5 7.5H452.5a7.5 7.5 0 0 0 7.5-7.5 14.517 14.517 0 0 1 14.5-14.5 7.5 7.5 0 0 0 7.5-7.5v-99.94a7.5 7.5 0 0 0-7.5-7.5 14.517 14.517 0 0 1-14.5-14.5 7.5 7.5 0 0 0-7.5-7.5H273.472a24.748 24.748 0 0 0-2.043-9.598 24.349 24.349 0 0 0-3.248-5.402H474.5a22.526 22.526 0 0 1 22.5 22.5Z" /></svg> 
                                <p className=' font-semibold ml-2'>Cash on Delivery Available </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;