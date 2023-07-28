// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function LandingPage() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     customPaging: function (i) {
//       return (
//         <div
//           style={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             background: i === 0 ? 'white' : 'gray',
//           }}
//         />
//       );
//     },
//     dotsClass: 'slick-dots',
//     className: 'slider',
//   };

//   return (
//     <div>
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <img
//               src="https://static.wixstatic.com/media/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1905,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg"
//               alt="Slide 2"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//           <div>
//             <img
//               src="https://static.wixstatic.com/media/4a7193_3d46254f0abd4093a0a93f8d6567d090~mv2.jpg/v1/fill/w_1251,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Enrogue%20Interior_CGI%20%20(3b).jpg"
//               alt="Slide 3"
//               style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
//             />
//           </div>
//         </Slider>
//       </div>

//       <div className='content-container'>
//         <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Properties</h4>
//         <h2 style={{ textAlign: 'center' }}>Display Latest & Featured Properties</h2>
//         <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//         Embark on an exciting adventure towards finding your dream home by exploring our extensive range of meticulously curated properties. With a wide selection of exceptional homes showcased on our platform, you have the freedom to choose the perfect residence that aligns with your unique preferences and requirements. Whether you seek a cozy apartment nestled in a bustling city center or a luxurious villa overlooking breathtaking landscapes, we are dedicated to helping you discover the house of your dreams. Take the first step towards creating a lifetime of cherished memories by selecting your dream home from our carefully curated collection of posted properties.
//         </p>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: i === 0 ? 'white' : 'gray',
          }}
        />
      );
    },
    dotsClass: 'slick-dots',
    className: 'slider',
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAtAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQMCAwUEBwYEBQUAAAABAgMABBEFIQYSMRMiQVFhBzJxkRRCUoGhsdEjYnLB4fAVFjNjJEOCkvElNESisv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIBEAAgICAgMBAQAAAAAAAAAAAAECEQMSITETQVEEMv/aAAwDAQACEQMRAD8A4wKFHQqWUCjoctKApAEBRgUeKUBQAkDFGBSsUeKAEgUeKUBR7eJoATihij5kHjRGVB40ADFFiiM6Ckm4HgtADdynd5vKrDh+dllaEfW3HxqGVnlGFgcg+Smn7Kxvo7iOWO2k7pB6YpSVqhp07NH2U2+Y6IRzA/6VW6ZZFaSNhkU4rRAda5G6OpclPFBNNMkQjI5mAzXTdKs0ightYUAAGNqyOntG15Fg7hq1jXD2+m31wnvxQMwx54oTtkT4Mt7QOOv8LlfSNBZRMoxPcDwPkK5RLLJcyPNM7PI5yzMdzSZpXmleVzl5GLMfMnrQh8RXYoqKOddhUdSY7GWVA6tGAfNsUKdmlienWjBA8RTcVrdTHEUEz/wqasIOGtanP7PTrg/FcUGVkPtFHjQ7VfOr6HgXW33kiihH+5IBipf+RGgK/wCIaxY2/MMgc2SaVoDL9sPAUYlY9FrXR8L8OwwSz3GvmRYvfESU5ZwcExzRx/8AHzlzsScClYWY3mk8gKJjJ4En4VtW1zhu2lkjtOHRIY2I5pXznFOXPGCW5txp2kWMCSJksYwcGi38GYyKyvpyBFa3L+XLExqfBwrrtwe5p0+/2lxV5dcaa19DkRGghl5gV5IwNvSof+Y9Yfnkk1GYpy4IB90n0p8iCh4B1t/9VbaEfvy1I/yOkBK3+t2MLD3lDZIqkiurqYjtrqYtnILuSDTJDPJLLIrHfvBj0pchwaGbh7huzKi615pCRnEQH6Uhl4Ps0WRBeXLhsAE4rPlBJOg5k5SO6c003fwq55lOGXFFBZr34x0+GIrbaSO6MIXAqGnHN0ZAfoUCxD3sDes7KhDcneKndW9abkQxorbDI3BPWjRBZ0bTNb0/VEwsixS/YY05eaeGzju+VcwRmRw6Z8xy7YrTaNxLqcRCTQSXUA8xkioljKUi1ImspkcgnlPWtto99b3sbI8g7G5jMbb9CazaN9Ot+1ijKZ+pIMGqqRb+znL2ylCeq+BrFw+FuVma4n4av9A1GWC4hbseY9nKoJVlztv8Kp42CneuoW3Gzxxra6/ppmgGwLJzAffWd40HD05hvdJYI0uQ8SHp610xk+mRRl+xkkAZBkY6ijpEbqqAds6+goVQWaw8X6pJpsoieK3uI3yAsYBZfSo8PEesc8V3JezNChCzAHpn4VUwzx3d8kl6FjBTlLg+IGxNFYLPcNLawunPLkcuQAxFKkSSGnnuLllku5DFO5Ebsx8TSbxpZezhlVu2tMqWPRhTU7xzJEUQxyRLyyqBgMR4j1qUxNtbLPGO0S7UxzI5xynw/wDNACS3LArw4P0j9nNGTjB8MUiMJDLLazcyso7hxujUrTkt2kaCcr2PLs+fcP2seNI1ATW9yY71w04Ucsibhl8DnxoANRKIFvlcu5kw+B0PqPKneySWdpJFZInGzE91XPhUe5uluZI5Y4nV+UCRR7rkdDilwC8eKWGK0Z0l6qVJGfP40BQcQkmEUDCPtA/7IN0PmM0l2D3EjQkquO+mMYPlUqDQdbmChLVlUdMjGPhVjFwVrl4/NMcFup6/lSsKKadALeFe88ZPdk6cp8QaUrRvzqjxiUnClj3WHka1lv7NLpwDcXBUfACrCH2e6VD/AO7vVPmOfP5UWgo5+oNs5WTk5lODGBk/EUhY2ftGJmON0JGM+ldUi4e4Zt1QMDKY/dIU1JC6NCuIbAN6tiluFHJra3nubgO1lI7Ke+pJy1axNOtTHH9D4alnBHeM0mAjfCtnBewseUqsbeg61KMhNS5Do51ccH6jfTtMkEFiMd2NTkVcaBwdd2snYtqyW6S7Mez5vkfCtUZCfWkFjipcm1Q6Cg9lcLBXutZup98gq2M/Kr1OELCJFWSWaXlGBk1U2V/dWL5tpmUeKHcGp93xPdMhEXZqcbnlrgyr9F1YCrrRNJtky9srfxb5rknH+naLayNLbHsbpztCgyCPM+VWXFXHNyxeK2uyzgkFwoAHoB4mstpWh3erzNc3JJUnmJkO7/fW/wCbBli9pyFZG010+jAPYGbBwHVM5FCugabpws7VYUbABz4UK7dgOdPYc1pb3FrEziTuuCpPI3lVhpGlXy3cchtJXTODhCOX94HzFdGhiihXEUSIPJVAp4SOzKiAsxOAoGST8KlzCjArwdqss0nagHvnD84HMPP41aJwVNPZRQ3tyitC37Mjvd09VNbMabq0m6WNx/1Dl/Olromsv/8AFx8XX9aTmPUyttwTp8eO1uGOPsKBVkvDmjiONXhMvZElS7bjPh8KvV4b1duohX+KT9BT8fCmpH37m1X/AKmP8qlyHqymitNIslHLp6E+eBUhdRt4v9CyiX4mj1Gwm0++WxuHRu0wVfcKQTinxwldcwD3kCAnAwGP6f2KWy9gotkZtZn/AOWsSfwoKjyapeON7mQfA4q2tuEu1JEmocrA4IEX9alrwZbAZe9nb+FVFLdD0ZlHmdzl3Zj6nNI561kPC2nGV4pJ7ot9Ul1G3/bTWjW9tpusSadfW8EvanmgkmjDHHgMn5Gl5Yj8bMuZPUfOjDE9K6b9GtozhbaJT6RgU/HyDGFUfAUvIGhy5IZ3OEglb+FCakpLcWZVLmKVAdwJEKnHpnrXSfvxUPVrCHVLMwTHlcbxyY3Rv0o8gaGQjdZFDIQc0rFXem8C3Xdma8hUHyJbP3YFXUXBtuP9e7lY+SKF/PNaqLZFmGkDY7grI8a3moWlvbfQC6lpMSKiZJ2/Ku6RcM6TF1gaQ/7jmnGtdJsgGMFnDjcFgox86pQ55FZwWDhfUNaktb65tbhpXjHMOz9weChQNh+tbGx4U1RY1SGxZFA6yELW5veMOHbHuzavZg/YSQE/IVn772oaDAStsl5dH/bh2+ZptoEmxheC9SYZaW2U+XMT/KhVa/tbHMeTRJwvhzSDNCpuJWkiu7QUu2n5Ly3cfVlQ/jUQHNGAQ6HxDD86hgjqplUgHzGaR2i+lPWVpFJaQMzMSY1J+VOXUGm2FpLeX0git4l5pJHJAUVinZr0RlkGdiKdD/CsXde0vS1Z/wDCtGnuo16SyhkB+7c/PFXHA3F7cS30ts+jJaiOIyGUOzDqBjBUefn4VrpIjZDPHVuZtNjvYwO0tW738J6/jinNGuRqGjwPnvcoUkenT760fFEanhrVQEUf8HL0Uj6hrD+zOQXFhhvcCZPxH9KymrNIl8WfLSoB2y+8B9YedSoLhZVDIevhXP8Aijj+80rW7yxsbK0YW0nKkj8xJ2BzkEeddD0S+tdY0m01G3CBbiIOQAMg+I6eB2p+OUQ2TIl/HJHIkyocg52HWofEOlTX8McttGy3Uffh2wSfI/H8wKofaRxjfaBqVpZ6NNDE5hMs7tErHc4UDPwb8KvPZtrt3ruiTT6nMZriO7aPnEKxDl5VIGNgep9aPE6sN1dFnozSanYxSHuP0JbzAzTWr6npehpG2q6jFbc4zGhBLEbZwBufeHhTvCDK+lcxJ5S5GT4edcWYycUccmLUrpoDe3jRNIf+WBzAL+HKPU08WNSVsWR6ukdUt+NeF5XAOqcg8S8TKB574rRW4tLq3inglEscqh0kRsqykdQfLp8xWMvPZPozRuLa+1CCXB75ZX8N9seVaSGw1O1jjt4J42hij7JAFC7BQAPkAac1FdBG32DiHiCXhqwjltbUXBllCcjuQF2Jz09KyE3tA4iu9rVba2X92EsfmTV7xfZ3N7YWkdwwz2xORt9U4/M/KqK20+4t1w0YK+HQmoeRrhGixxfJW3Ora9e5W51u7A8VjHZj/wCtV0ujNOpea5uJTgkmaRm/M1qm5oPehKn95en303caiFs58KDhCPDy/rU7SfsvWK9GJtdAicbSohPTrVknC9wqKyzJv+9mpJkiVT3MEAZGOv30S3bNlVLK2x+6nTDgj3GkG1k7LPaEDcgeNCjN+VOCGOPWhTpitEvUzHaSlIUHKPtEmqi4vpuTIkKqD4ACste6vruoSEyy8md8RxgD9ahtZX068012xIGwZjW+q+nPT+Hp3R5A+mWe7f6S+L+XptXO/bJqxa8sdGDHslj+kyoQ/eJJC538MNW14WmMmhWLBgcxD639RXM/bFCycVwTsvclsUUZz1V3z+YrLDWw8nRufZ/wXpEOjWupXWnw3F5dJ2gaWIsqKfdAVmIBx1NbW2060tXL21nDCxGC0cKqSPuqo4IuI7vhHSJoyhH0ZUOB0K90j5g1ejlz1GfgP0qpPnkldELX05tD1FMHvWso8PsH1rnPsiftLBGI3wT0ziulasA2mXg3OYJB0H2TXLPYzJzaWmNiCdx8Kl/TSHszHEdg2qe0a9sEfElxdlFbOe9yDG5+Faz2Nar29jeaLOCslu/bRKwYkBj3xjO2G/8A1WedyPbCG2P/AKku5PXYf30p/i36RwZ7QDq1og7K8jeRE3wSy8rjJHg2G+8V0drUyXHJA1wjiLiviC6Ds0FjbyyggNgJEAoH3nf51sfYzMgs9SjTOBKjkjA6jHUfDxqs9mekGThDX7mQMXu4ZLdHxklRGcnb95j8qd9kcvZ6rqEQZCstqJBkqzHlbB3G+O+NjSb4aBdm+4Ui5dChGPeyawPGvs4urzULjUdDWOZbk9pLasQDzNgsVJ2IJbOD+grofCTMdAty4wyjBFQZOLdEstWl028uzBPDygl0PK3dHQjy7Nh91Y4m1FUaZOZM5pw9xTxHw7eLZakJpoFdAba7B5lGSO63X8xXWeH9Wttc0uHULJm7KQdGGGVgMFSPMVlOOtZ0bUtMjjtXjubmJg6Oqn9moXJ3I8cgY/SpXspt5LfQrzmBMf0xuzJ+sFVUOPTukfca1krVmcXTosuLriSCK1CKD332z16fqaoBqXO37S3cEeTD9aveMnObUHcqHOPlvWakBCgKytnwOxJ6VyT7OvH/ACSP8VQEBnY7fY/SoOvXVnJpswVWaViFPKh5uu+Mj0os8xH1fHr/AH5edNle7zRuHJ6j8fDpUrgtmdeZZI1jLuqjoXGNv50yBD2fckOQMA/d/WtJLLyqFdUJAzjmPy3qNIsMjcsluOuOXb8jV7kalS3ZBjiQHc9KFWDQWzd5oEUnfdU/ShVboWpUXlrDLllKjyHKAB+NU08SJIVYx7bkt0rSNayOWCGFsdeSXJ/HFQrjS7mQYFo58Sy4OPXrTTJo6hwFMJOF7HlcEKgXY56AVA9qPDk+taPDeWEJku7Ek9mkZ5pIz7wHmRgH51XcIa6dE0WKxns5pWVyVYYAwTtnPSrluNmz+zsoh5c8/wDSpjLWVoTi2jAcD8e3HC9u9lPbNdWJcuEVuV42PXGdtz1B8c1utI9qVpqur2OnxabPELqUR9pNIh5SR5A+dVd9cWWqym5utB0tpWPekwQx+JBGaKwnttOnWW20bTreQHuutqGdT58xJIrR5YP0SsUjp1/k2VwO9vE4wPgfSuR+xRzFFNbvs6bkE42Pr8xV/c8R6hKjqbxkDAg/sl8qotKVdMuXutOnit5mXkJMZAYeGxzv13rHyLo1WJogvpmot7U/pY02++jHUQ/brbOUC7b8wGMeua6RxRwpp/E9vbxX0rRGBy6SRMqvuNxkg7dPlWdbWdSKd+/bfxRgm/3AZppru6OC97dMT4NKfL0rR5rJWE2uk6LZ6PoqadaHMUasFZgGckkkkkD18qw/AmgaloWri6v+VIRbPCWe5QjfBHQ5z3aUrZ7ztJ13O7D0zk0a3KhiyEg+qeH3elS81eh+G/ZouGNctrHRILa8SZbhO6yiM7+HX4Cs9rGj6NqF1JdRHVYXkZmbKxlW5jk+8c+L+PjSXuGkwqOg3xkc238ulO95gOSZubw3Gf7xULLNLgt4oN8kO30PT0uVmlN3Oh96MyqgYZJ3wCcZPmK1UOuyW0CQ2lhbRQxpyqvaE8u3oMefzqiwwADcwyPEA9fL7hSAOcuMd3GzYIP4elDzTfsaw416J+p6pLeyrJNDBhNsKSDjrVa88BzmNg4GTysD4etIkbJ2ffPQkHHjtTH7RSASQc9Px38KjvllUl0SGEbAqjyKd9mXA8qYltiobs2TfO3Pv4fCjZpxGMHbbfGDjrvuaak5ioJBPukeFACClxnJCPHvsCcHcVG5GMgbspFGcbNkdT4VIt5eY4AcNtkZ6ePjSJrjlxnfpk8ucbZNOxUQneRCFBbGPrZz+VClG8QHCnIGN2Uqenlyn86FXySNNcPyBmCBRuSY+YfMUtGaWY4AJzjut1/7qKhTomyekxAAYPn1UEfMUo3A6KyuMbcn6b0KFTQxEjQuCXh5j4ZTHN+VNRv2a7syHPMQHOKFCkNCjcEqOaSb4DfI+JoreRCrc7cwJz3lz+IxQoUkUOPKGYdyFlx45X8aMMD3jEnqe03/ABHwoUKYBnY95ZQxOzcww1KM2V7zDp0xkH8zRUKVA2CK+RwDzYA6Acw38fCnmvojgGVebOc843/sUKFUlYm6Qr6SSvccDx3bO5/pTiXTtjwz4g5IoUKlodh/SHboSQT1K5pppsg57IHrjlI6/ChQpIBl5FbZF33zyuf50qUxlGJWTO5Byvw9KFCmwQSlBkJMy8udmHTb76DQzkApNGfAc3oNqFCgA8aodgLVlGwJIzQoUKdio//Z"
              alt="Slide 2"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://www.shutterstock.com/image-vector/content-management-system-concept-cms-business-1056488240"
              alt="Slide 3"
              style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
        </Slider>
      </div>

      <div className='content-container'>
        <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Content Management System</h4>
        <h2 style={{ textAlign: 'center' }}>Effortlessly Manage and Publish Your Content</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Simplify your content management process with our state-of-the-art Content Management System (CMS). Create, edit, and publish your website's content effortlessly with our intuitive interface. Our CMS platform empowers you to take full control of your website's content, allowing you to showcase your ideas and creativity without any technical hurdles.
          Whether you're a blogger, a business owner, or a creative professional, our CMS gives you the flexibility and freedom to manage your content in a seamless and efficient manner. Stay ahead in the digital landscape with our powerful CMS and focus on what truly matters - creating engaging and captivating content for your audience.
        </p>
      </div>
    </div>
  );
}

