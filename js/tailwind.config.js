tailwind.config = {
    theme: {
      extend: {
        // customize css start 
        colors: {
          navcolor: '#160C6D',
          hovColor:'#1BBF00',
          contactColor:'#1BBF00',
          overlay:'#6B62C5',
          btncolor:'#1BBF00',
          gallery:'#C4C4C4',
          h3colorone:'#1BBF00',
          h3color:'#141135',
          aftercolor:'#4F585F',
          afterbtncolor:'#1BBF00',
          textpcolor:'#726E9E',
          whatwehovercolor:'#6B62C5',
          textallho:'#ffffff',
          gallerybg:'#C4C4C4',
          choosetherighthover:'#6B62C5',
          fontaswamstar:'#FF7628',
          youmaylikeimg:'#C4C4C4',
          news:'#1BBF00',
          innovateFooter:'#48409C',
          footertextcolor:'#FEFEFE'
          
        },

        opacity: {
          overlay: '.9',
          navcolor:'.7',
          aftercolor:'.2',
          afterbtncolor:'.5'
       
          

        },

        zIndex: {
          z: '100',
        },
        maxWidth: {
          commonContainer: '1170px',
          clintcointainer:'80%',
          clintimg:'150px'
        },
        fontSize: {
          sm: '0.8rem',

        },
        fontFamily: {
          open: ['Open Sans'],
          papri:['Paprika'],
         
        },
        backgroundImage: {
          banner: "url('./image/image.png')",
          overview_gallery:"url('./image/gallary.png')",
          chooseBanner:"url('./image/Why Choose Us (2).png')",
          whatWebanner:"url('./image/bg.png')",
          weCreat:"url('./image/we-crt-bg.png')",
          chooseTheright:"url('./image/Choose The Right Plan.png')",
          testimonial:"url('./image/testimonial.png')",
          youMayalsolike:"url('./image/you-may-bg.png')",
          

         
        },
        
        // customize css end
      }
    }
  }