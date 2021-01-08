/** @jsx createElement */

const ContactPage = (props) => {
  return (
    <section id={props.pageId} class="page">
      <div class="page__header">
        <h2>Contact</h2>
      </div>
      <div class="page__content">
        <ul id="contact__detail">
          <li id="detail__google-map">
            <h3 id="detail__header">Where <span class="color-lb">I</span> am</h3>
            <GoogleMap />
          </li>
          <li id="detail__location" class="detail-info">
            <div class="detail__key"></div>
            <p><b>Chatswood, Sydney, Australia</b></p>
          </li>
          <li id="detail__email" class="detail-info">
            <div class="detail__key"></div>
            <p><b>Zhian.Chen-1@student.uts.edu.au</b></p>
          </li>
          <li id="detail__phone" class="detail-info">
            <div class="detail__key"></div>
            <p><b>+61 450072939</b></p>
          </li>
        </ul>
        <div id="contact__form">
          <form action="#" method="post">
            <div id="form__name"><input type="text"/></div>
            <div id="form__email"><input type="text"/></div>
            <div id="form__message"><input class="" type="text"/></div>
            <div id="form__captcha"></div>
            <div id="form__submit"><input class="form__submit-bt"type="submit"/></div>
          </form>
        </div>
      </div>
    </section>
  )
}

const GoogleMap = (props) => {
  // var address = "306/18%20freeman%20road,%20chatswood,%20NSW"
  // var mapURL= "https://maps.google.com/maps?q="+address+"+()&amp;iwloc=B&amp;output=embed";
  var myKey = "AIzaSyDUwhNrgtJFCgJ-ocT7dUdY9oCC38D0_DA";

  // return (
  //   <div id="detail__google-map">
  //     <iframe is="x-frame-bypass" width="100%" height="200px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?q=306/18%20freeman%20road,%20chatswood,%20NSW+()&amp;iwloc=B&amp;output=embed">
  //     </iframe>
  //   </div>
  // )
  return (
      <div id="map"></div>
  )
}
var pageLoader = document.querySelector("#page-loader")
pageLoader.appendChild(<ContactPage pageId="contact" />);

// var address = document.querySelector("#address")
// address.oninput = function (){
//   document.querySelector("iframe").src = "https://maps.google.com/maps?q="+this.value+"+()&amp;iwloc=B&amp;output=embed";
// }
