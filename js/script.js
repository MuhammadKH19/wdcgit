        
        window.addEventListener('scroll', () => {
          document.getElementById('scroll').innerHTML = window.pageYOffset;
        });

        document.getElementById('berita-li').addEventListener('click', () => {
          document.getElementById('berita').classList.toggle('berita-show');
        })

        document.getElementById('toggle-btn').addEventListener('click', () => {
          document.getElementById('berita').classList.remove('berita-show');
        })

        document.getElementById('toggle-btn2').addEventListener('click', () => {
          document.getElementById('berita-saya').classList.remove('berita-show');
        })

        document.getElementById('berita-saya-li').addEventListener('click', () => {
          document.getElementById('berita-saya').classList.toggle('berita-show');
        })

        document.getElementById('toggle').addEventListener('click', () => {
          document.getElementById('selengkapnya').classList.toggle('text-white');
          document.getElementById('apa').classList.toggle('text-white');
          document.getElementById('gelombang2').classList.toggle('gelombang2-dark');
          document.getElementById('info3').classList.toggle('info3-dark');
          document.getElementById('sec-news').classList.toggle('sec-news-dark');
          document.getElementById('info2').classList.toggle('info2-dark');
          document.getElementById('container').classList.toggle('container-dark');
          document.getElementById('wraps1').classList.toggle('wraps2-dark');
          document.getElementById('wraps1').classList.toggle('wraps1-dark');
          document.getElementById('edukasi').classList.toggle('text-white');
          document.getElementById('fa-hand').classList.toggle('fa-hand-dark');
          document.getElementById('sec-paket').classList.toggle('sec-paket-dark');
        });

        document.getElementById('toggle').addEventListener('click', () => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Mode telah diubah'
          });

          document.getElementById('toggle').classList.toggle('toggle-show');
          document.getElementById('sun').classList.toggle('sun-show');
          document.getElementById('body').classList.toggle('body-dark');
          document.getElementById('mooon').classList.toggle('moon-show');
          document.getElementById('home').classList.toggle('sec-1-shows');
          document.getElementById('sec-korban').classList.toggle('sec-korban-dark');
          document.getElementById('sec-map').classList.toggle('sec-map-dark');
          document.getElementById('glb').classList.toggle('glb-show');
          document.getElementById('sec-2').classList.toggle('sec-2-dark');
          document.getElementById('siapa').classList.toggle('siapa-dark');
          document.getElementById('info').classList.toggle('info-dark');
        });
        
        document.getElementById('jams').addEventListener('click', () => {
          document.getElementById('jamx').classList.toggle('jam-hide');
        });

        window.setTimeout("waktu()",1000);
        function waktu() {
            var tanggal = new Date();
            setTimeout("waktu()",1000);
            document.getElementById("jam").innerHTML = tanggal.getHours();
            document.getElementById("menit").innerHTML = tanggal.getMinutes();
            document.getElementById("detik").innerHTML = tanggal.getSeconds();
        }

        window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 600) {
            const home = document.getElementById('homeUp');
            home.classList.add('showUp')
          } else if (window.pageYOffset < 650){
            const home = document.getElementById('homeUp');
            home.classList.remove('showUp')
          }
        });

        window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 600) {
            const home = document.getElementById('homeDown');
            home.classList.add('showDown')
          } else if (window.pageYOffset < 650){
            const home = document.getElementById('homeDown');
            home.classList.remove('showDown')
          }
        });

        window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 300) {
            const home = document.getElementById('sec-call');
            home.classList.add('sec-call-show')
          } else if (window.pageYOffset < 300){
            const home = document.getElementById('sec-call');
            home.classList.remove('sec-call-show')
          }
        });

            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 600) {
            const homes = document.getElementById('kartu');
            homes.classList.add('card-show')
          } else if(window.pageYOffset < 500) {
            const homes = document.getElementById('kartu');
            homes.classList.remove('card-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 750) {
            const homes = document.getElementById('sec-korban');
            homes.classList.add('sec-korban-show')
          } else if(window.pageYOffset < 750) {
            const homes = document.getElementById('sec-korban');
            homes.classList.remove('sec-korban-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 1500) {
            const homes = document.getElementById('sec-dilakukan');
            homes.classList.add('sec-dilakukan-show')
          } else if(window.pageYOffset < 1500) {
            const homes = document.getElementById('sec-dilakukan');
            homes.classList.remove('sec-dilakukan-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 2100) {
            const homes = document.getElementById('sec-join');
            homes.classList.add('sec-join-show')
          } else if(window.pageYOffset < 2100) {
            const homes = document.getElementById('sec-join');
            homes.classList.remove('sec-join-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 3440) {
            const homes = document.getElementById('sec-map');
            homes.classList.add('sec-map-show')
          } else if(window.pageYOffset < 3440) {
            const homes = document.getElementById('sec-map');
            homes.classList.remove('sec-map-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 2760) {
            const homes = document.getElementById('sec-rs');
            homes.classList.add('sec-rs-show')
          } else if(window.pageYOffset < 2760) {
            const homes = document.getElementById('sec-rs');
            homes.classList.remove('sec-rs-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >=10) {
            const homes = document.getElementById('navs');
            homes.classList.add('navs-blue')
          } else if(window.pageYOffset < 150) {
            const homes = document.getElementById('navs');
            homes.classList.remove('navs-blue')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 5450) {
            const homes = document.getElementById('sec-faq');
            homes.classList.add('sec-faq-show')
          } else if(window.pageYOffset < 5450) {
            const homes = document.getElementById('sec-faq');
            homes.classList.remove('sec-faq-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 4890) {
            const homes = document.getElementById('siapa');
            homes.classList.add('siapa-show')
          } else if(window.pageYOffset < 4890) {
            const homes = document.getElementById('siapa');
            homes.classList.remove('siapa-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 2690) {
            const homes = document.getElementById('info');
            homes.classList.add('sec-info-show')
          } else if(window.pageYOffset < 2690) {
            const homes = document.getElementById('info');
            homes.classList.remove('sec-info-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 5340) {
            const homes = document.getElementById('info3');
            homes.classList.add('sec-info3-show')
          } else if(window.pageYOffset < 5340) {
            const homes = document.getElementById('info3');
            homes.classList.remove('sec-info3-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 6010) {
            const homes = document.getElementById('sec-news');
            homes.classList.add('sec-news-show')
          } else if(window.pageYOffset < 6010) {
            const homes = document.getElementById('sec-news');
            homes.classList.remove('sec-news-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 3318) {
            const homes = document.getElementById('info2');
            homes.classList.add('sec-info2-show')
          } else if(window.pageYOffset < 3318) {
            const homes = document.getElementById('info2');
            homes.classList.remove('sec-info2-show')
          }
      });
            
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 7315) {
            const homes = document.getElementById('gelombang2');
            homes.classList.add('gelombang2-show')
          } else if(window.pageYOffset < 7315) {
            const homes = document.getElementById('gelombang2');
            homes.classList.remove('gelombang2-show')
          }
      });

        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 2200) {
            const homeszz = document.getElementById('sec-3');
            homeszz.classList.add('sec-show')
          } else if(window.pageYOffset < 2200) {
            const homeszz = document.getElementById('sec-3');
            homeszz.classList.remove('sec-show')
          }
      });

        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 4130) {
            const homeszz = document.getElementById('sec-2');
            homeszz.classList.add('sec-2-show')
          } else if(window.pageYOffset < 4130) {
            const homeszz = document.getElementById('sec-2');
            homeszz.classList.remove('sec-2-show')
          }
      });
      
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 1600) {
            const homesz = document.getElementById('sec-konsultasi');
            homesz.classList.add('konsultasi-show')
          } else if(window.pageYOffset <1600) {
            const homesz = document.getElementById('sec-konsultasi');
            homesz.classList.remove('konsultasi-show')
          }
      });
      
        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 8160) {
            const homesz = document.getElementById('sec-paket');
            homesz.classList.add('sec-paket-show')
          } else if(window.pageYOffset < 8160) {
            const homesz = document.getElementById('sec-paket');
            homesz.classList.remove('sec-paket-show')
          }
      });

        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 6080) {
            const homesz = document.getElementById('sec-6');
            homesz.classList.add('sec-6-show')
          } else if(window.pageYOffset < 6080) {
            const homesz = document.getElementById('sec-6');
            homesz.classList.remove('sec-6-show')
          }
      });

        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 9140) {
            const homesz = document.getElementById('cegah');
            homesz.classList.add('sec-cegah-show')
          } else if(window.pageYOffset < 9140) {
            const homesz = document.getElementById('cegah');
            homesz.classList.remove('sec-cegah-show')
          }
      });

        window.addEventListener('scroll', () => {
          if(window.pageYOffset <= 600) {
            const homeszz = document.getElementById('jml-user');
            homeszz.classList.add('jml-user-show')
          } else if(window.pageYOffset >= 600) {
            const homeszz = document.getElementById('jml-user');
            homeszz.classList.remove('jml-user-show')
          }
      });

        window.addEventListener('scroll', () => {
          if(window.pageYOffset >= 400) {
            const homeszz = document.getElementById('interval');
            homeszz.classList.add('interval-show')
          } else if(window.pageYOffset <= 500) {
            const homeszz = document.getElementById('interval');
            homeszz.classList.remove('interval-show')
          }
      });