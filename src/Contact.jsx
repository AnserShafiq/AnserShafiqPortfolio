import React, { useState } from 'react'
import { GrFormNextLink as NEXT } from "react-icons/gr";
import emailjs from 'emailjs-com';

emailjs.init('VNj6ttqgEF4WjPoh6');

const Contact = () => {
  const [messageBody, setMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    countryCode:'',
    companyName: '',
    reason: '',
    location: '',
    details: '',
  })

  const countryCodes = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'Albania', code: '+355' },
    { name: 'Algeria', code: '+213' },
    { name: 'Andorra', code: '+376' },
    { name: 'Angola', code: '+244' },
    { name: 'Argentina', code: '+54' },
    { name: 'Armenia', code: '+374' },
    { name: 'Australia', code: '+61' },
    { name: 'Austria', code: '+43' },
    { name: 'Azerbaijan', code: '+994' },
    { name: 'Bahamas', code: '+1-242' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Barbados', code: '+1-246' },
    { name: 'Belarus', code: '+375' },
    { name: 'Belgium', code: '+32' },
    { name: 'Belize', code: '+501' },
    { name: 'Benin', code: '+229' },
    { name: 'Bhutan', code: '+975' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Bosnia and Herzegovina', code: '+387' },
    { name: 'Botswana', code: '+267' },
    { name: 'Brazil', code: '+55' },
    { name: 'Brunei', code: '+673' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Burundi', code: '+257' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' },
    { name: 'Cape Verde', code: '+238' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' },
    { name: 'Chile', code: '+56' },
    { name: 'China', code: '+86' },
    { name: 'Colombia', code: '+57' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo', code: '+242' },
    { name: 'Costa Rica', code: '+506' },
    { name: 'Croatia', code: '+385' },
    { name: 'Cuba', code: '+53' },
    { name: 'Cyprus', code: '+357' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Denmark', code: '+45' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Dominica', code: '+1-767' },
    { name: 'Dominican Republic', code: '+1-809' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' },
    { name: 'El Salvador', code: '+503' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Estonia', code: '+372' },
    { name: 'Eswatini', code: '+268' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Fiji', code: '+679' },
    { name: 'Finland', code: '+358' },
    { name: 'France', code: '+33' },
    { name: 'Gabon', code: '+241' },
    { name: 'Gambia', code: '+220' },
    { name: 'Georgia', code: '+995' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'Greece', code: '+30' },
    { name: 'Grenada', code: '+1-473' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Guinea', code: '+224' },
    { name: 'Guyana', code: '+592' },
    { name: 'Haiti', code: '+509' },
    { name: 'Honduras', code: '+504' },
    { name: 'Hong Kong', code: '+852' },
    { name: 'Hungary', code: '+36' },
    { name: 'Iceland', code: '+354' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Iran', code: '+98' },
    { name: 'Iraq', code: '+964' },
    { name: 'Ireland', code: '+353' },
    { name: 'Israel', code: '+972' },
    { name: 'Italy', code: '+39' },
    { name: 'Jamaica', code: '+1-876' },
    { name: 'Japan', code: '+81' },
    { name: 'Jordan', code: '+962' },
    { name: 'Kazakhstan', code: '+7' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kiribati', code: '+686' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Laos', code: '+856' },
    { name: 'Latvia', code: '+371' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' },
    { name: 'Libya', code: '+218' },
    { name: 'Liechtenstein', code: '+423' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Malawi', code: '+265' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mali', code: '+223' },
    { name: 'Malta', code: '+356' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Mauritania', code: '+222' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Mexico', code: '+52' },
    { name: 'Micronesia', code: '+691' },
    { name: 'Moldova', code: '+373' },
    { name: 'Monaco', code: '+377' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Montenegro', code: '+382' },
    { name: 'Morocco', code: '+212' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Namibia', code: '+264' },
    { name: 'Nauru', code: '+674' },
    { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' },
    { name: 'Nigeria', code: '+234' },
    { name: 'North Korea', code: '+850' },
    { name: 'Norway', code: '+47' },
    { name: 'Oman', code: '+968' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Palau', code: '+680' },
    { name: 'Panama', code: '+507' },
    { name: 'Papua New Guinea', code: '+675' },
    { name: 'Paraguay', code: '+595' },
    { name: 'Peru', code: '+51' },
    { name: 'Philippines', code: '+63' },
    { name: 'Poland', code: '+48' },
    { name: 'Portugal', code: '+351' },
    { name: 'Qatar', code: '+974' },
    { name: 'Romania', code: '+40' },
    { name: 'Russia', code: '+7' },
    { name: 'Rwanda', code: '+250' },
    { name: 'Saint Kitts and Nevis', code: '+1-869' },
    { name: 'Saint Lucia', code: '+1-758' },
    { name: 'Saint Vincent and the Grenadines', code: '+1-784' },
    { name: 'Samoa', code: '+685' },
    { name: 'San Marino', code: '+378' },
    { name: 'Sao Tome and Principe', code: '+239' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Senegal', code: '+221' },
    { name: 'Serbia', code: '+381' },
    { name: 'Seychelles', code: '+248' },
    { name: 'Sierra Leone', code: '+232' },
    { name: 'Singapore', code: '+65' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Slovenia', code: '+386' },
    { name: 'Solomon Islands', code: '+677' },
    { name: 'Somalia', code: '+252' },
    { name: 'South Africa', code: '+27' },
    { name: 'South Korea', code: '+82' },
    { name: 'Spain', code: '+34' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Sudan', code: '+249' },
    { name: 'Suriname', code: '+597' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Syria', code: '+963' },
    { name: 'Taiwan', code: '+886' },
    { name: 'Tajikistan', code: '+992' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Thailand', code: '+66' },
    { name: 'Togo', code: '+228' },
    { name: 'Tonga', code: '+676' },
    { name: 'Trinidad and Tobago', code: '+1-868' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Turkey', code: '+90' },
    { name: 'Turkmenistan', code: '+993' },
    { name: 'Tuvalu', code: '+688' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ukraine', code: '+380' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United States', code: '+1' },
    { name: 'Uruguay', code: '+598' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'Vanuatu', code: '+678' },
    { name: 'Vatican City', code: '+379' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Yemen', code: '+967' },
    { name: 'Zambia', code: '+260' },
    { name: 'Zimbabwe', code: '+263' },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    if(name === 'contactNumber'){
      let formattedPhone = value.replace(/\D/g, '');
      if (formattedPhone.length > 10) {
          formattedPhone = formattedPhone.slice(0, 10);
      }
      formattedPhone = formattedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 - $3');
      setMessage((prev) => ({
          ...prev,
          [name]: formattedPhone,
      }));
  }
  else{
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  }

  const handleSubmission = async(e) =>{
    e.preventDefault();
    const DataToSend = {
      firstName: messageBody.firstName,
      lastName: messageBody.lastName,
      companyName: messageBody.companyName,
      email: messageBody.email,
      countryCode: messageBody.countryCode,
      contactNumber: messageBody.contactNumber,
      location: messageBody.location,
      reason: messageBody.reason,
      details: messageBody.details,
    }
    console.log(messageBody);
    await emailjs.send('service_wiss6ei', 'form-01', DataToSend, 'VNj6ttqgEF4WjPoh6')
      .then( (response) =>{
          console.log('Sucessfully Sent!!x1', response.status, response.text);
      },(error) => {
         console.log('Error => ', error);
      }
      ).catch((e) => console.log(e))

      await emailjs.send('service_wiss6ei', 'form-02', DataToSend, 'VNj6ttqgEF4WjPoh6')
      .then( (response) =>{
          console.log('Sucessfully Sent!!x2', response.status, response.text);
      },(error) => {
         console.log('Error => ', error);
      }
      ).catch((e) => console.log(e))
      window.location.reload();
  }

  return (
    <>
    <div className='flex flex-row items-end w-[90%] mx-auto pt-[8vh] lg:pt-[15vh]'>
      <a className='text-[0.8rem] underline mr-1 text-stone-600 cursor-pointer transition ease-in-out duration-[0.5s] hover:scale-[1.1] hover:text-red-600' href='/'>Home</a>
        <NEXT />
      <a className='text-[0.8rem] underline ml-1 text-stone-600 cursor-pointer transition ease-in-out duration-[0.5s] hover:scale-[1.1] hover:text-red-600' href='/contact-schedule'>Contact</a>
    </div>
    <div className='flex flex-col w-[90%] lg:w-[60%] mx-auto '>
      <div className='flex flex-col items-center pt-[5%] lg:pt-[2.5%] pb-[4%] w-[100%] '>
      <h2 className=' font-extrabold text-zinc-800 text-[2.2rem] lg:text-[2.8rem] lg:text-[3rem] uppercase leading-none text-center tracking-wider font-[var(--josefin-font)]'>Let's discuss your project</h2>
      <h2 className=' font-[500] text-zinc-800 text-[1.3rem] capitalize mt-4 leading-tight text-center tracking-normal font-[var(--josefin-font)]'>My focus is on grasping your requirements and delivering a solution specifically designed to achieve your goals.</h2>
      <h2 className=' font-[500] text-zinc-800 text-[1.1rem] lg:text-[1rem] capitalize mt-6 leading-tight text-center tracking-normal font-[var(--josefin-font)]'>Please provide your information, and I'll get in touch to schedule a time to meet.</h2>
      <form className='flex flex-col w-[100%] lg:w-[60%] p-3 josefin-font' onSubmit={handleSubmission}>
        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-2'>First Name</label>
        <input className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem]' type='text' name='firstName' value={messageBody.firstName} onChange={handleChange} required/>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Last Name</label>
        <input className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem]' type='text' name='lastName' value={messageBody.lastName} onChange={handleChange} required/>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Email</label>
        <input className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem]' type='email' name='email' value={messageBody.email} onChange={handleChange} required/>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Contact Number</label>
        <div className='flex flex-row justify-between p-0'>
        <select className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-1 lg:px-3 py-2 text-[1rem] w-[21%] lg:w-[20%]' name='countryCode' value={messageBody.countryCode} onChange={handleChange} required>
          <option value={''}>+000</option>
          {countryCodes.map((Country, index) =>
            <option key={index} value={Country.code}> {Country.code} - {Country.name}</option>
          )}
        </select>
        <input placeholder='(000) 000 - 0000' className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem] w-[77%]' type='tel' name='contactNumber' value={messageBody.contactNumber} onChange={handleChange} required/>
        </div>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Address</label>
        <input className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem]' type='text' name='location' value={messageBody.location} onChange={handleChange} required/>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Company Name</label>
        <input className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem]' type='text' name='companyName' value={messageBody.companyName} onChange={handleChange} required/>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Contact Reason</label>
        <select className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-3 py-2 text-[1rem]' name='reason' value={messageBody.reason} onChange={handleChange} required>
          <option value={''}>Select a reason </option>
          <option value={'Web Development'}>Web Development </option>
          <option value={'Mobile Application Development'}>Mobile Application Development </option>
          <option value={'General Enquiry'}>General Enquiry </option>
          <option value={'other'}>Other </option>
        </select>

        <label className='text-[1.1rem] font-bold uppercase tracking-normal leading-none mt-5'>Details</label>
        <textarea className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 py-2 text-[1rem]' rows={3} name='details' value={messageBody.details} onChange={handleChange} required/>

        <button className='border-1 border-stone-400 rounded-[15px] bg-stone-200 px-4 pt-[1.25%] pb-[0.75%] text-[1.2rem] font-semibold uppercase w-fit mx-auto mt-5 transition ease-in-out duration-[0.5s] hover:scale-[1.1]' type='submit'>Submit</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Contact