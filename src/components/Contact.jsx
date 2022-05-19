import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="w-4/5 mx-auto my-3">
      <h1 className="text-3xl font-semibold uppercase text-green-700">Notre Localisation</h1>
    </div>
  <iframe className="w-4/5 mx-auto my-3"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3503.815613769476!2d-17.348171759963552!3d14.774688723282546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1621621609097!5m2!1sfr!2ssn"
    width="600" height="450" style={{border:0}} allowfullscreen="true" loading="lazy" title="map"></iframe>  
    </>
  )
}

export default Contact