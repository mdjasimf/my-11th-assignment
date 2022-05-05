import React from 'react';
import coconut from '../../kiwi.png';
import kiwi from '../../coconut.png';

const NewArrival = () => {

    return (
        <div className='my-2 container'>
            <h1 className='text-center text-success m-2'><b>New Coming</b></h1>
            <div className='w-25 mx-auto  my-5'>
                <div className=' border-bottom border-success'></div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='border rounded border-secondary p-2'>
                    <h4 className='text-center'>Coconut</h4>
                    <div className='d-flex justify-content-center'>
                        <img src={coconut} alt="" />
                    </div>
                    <p>A coconut is the edible fruit of the coconut palm<br />
                        (Cocos nucifera),a tree of the palm family.<br />
                        Coconut flesh is high in fat and can be dried<br />
                        or eaten fresh or processed into coconut milk<br />
                        or coconut oil.The liquid of the nut,<br />
                        known as coconut water, is used in beverages.</p>
                </div>
                <div className='ms-5 border rounded border-secondary p-2'>
                    <h4 className='text-center'>Kiwi</h4>
                    <div className='d-flex justify-content-center'>
                        <img src={kiwi} alt="" />
                    </div>
                    <p>Kiwis are high in Vitamin C and dietary fiber<br />
                        and provide a variety of health benefits.<br />
                        This tart fruit can support heart health,<br />
                        digestive health, and immunity.<br />
                        The kiwi is a healthy choice of fruit and<br />
                        is rich with vitamins and antioxidants.</p>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;