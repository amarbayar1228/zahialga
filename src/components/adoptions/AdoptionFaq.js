import React from 'react';

function AdoptionFaq() {
  return (

	  <section className="faq-area faq-two-bg">
        <div className="faq-two-img" />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-6">
            <div className="faq-wrapper">
            <div className="section-title mb-35">
              <h5 className="sub-title">FAQ Асуулт</h5>
              <h2 className="title">Түүх &amp; гэр бүлийн үрчлэлт</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Нохой үрчлүүлэхээр ажиллаж байна
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                  Нохойн ДНХ-ийн хамгийн сайн шинжилгээ бол үүлдрийн үүлдэр, эрүүл мэндийн багц (atth Chewy-г үзэх) бөгөөд энэ нь танд бор үүлдрийн үүлдэр, ихэнх нохойн өвөг дээдсийг олж авах боломжийг олгодог.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Тэмцээн &amp; Шагнал
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                  Нохойн ДНХ-ийн хамгийн сайн шинжилгээ бол үүлдрийн үүлдэр, эрүүл мэндийн багц (atth Chewy-г үзэх) бөгөөд энэ нь танд бор үүлдрийн үүлдэр, ихэнх нохойн өвөг дээдсийг олж авах боломжийг олгодог.
                   </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      3 сартай гөлөгнүүд 
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                  Нохойн ДНХ-ийн хамгийн сайн шинжилгээ бол үүлдрийн үүлдэр, эрүүл мэндийн багц (atth Chewy-г үзэх) бөгөөд энэ нь танд бор үүлдрийн үүлдэр, ихэнх нохойн өвөг дээдсийг олж авах боломжийг олгодог.
                   </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="faq-shape"><img src="img/images/faq_shape.png" alt="" /></div>
      </section>
  )
}

export default AdoptionFaq;
