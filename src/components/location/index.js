import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8899184769334!2d7.313458314468018!3d9.16440228937767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd903bd93d9df%3A0x8472c52ffe833bba!2sEfobic%20Plaza!5e0!3m2!1sen!2sng!4v1638095868932!5m2!1sen!2sng"
  width="100%"  height="500px"  allowFullScreen="" 
             loading="lazy"></iframe>
        
        <div className="location_tag">
           location 
        </div>
        </div>
    );
};

export default Location;
