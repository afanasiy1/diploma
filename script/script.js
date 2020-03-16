'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //выдвиг меню
    const clubSelect = () => {
        const clubSelect = document.querySelector('.club-select');
        const ul = clubSelect.querySelector('ul');

        const showClubs = () => {
            clubSelect.classList.toggle('active');

            if (clubSelect.matches('.active')) {
                ul.style.display = 'block';
            } else {
                ul.style.display = 'none';
            }
        };

        clubSelect.addEventListener('click', showClubs);
    };
    clubSelect();


    //попап
    const visitForm = () => {
        const popUp = document.getElementById('free_visit_form'),
            popypBtn = document.querySelectorAll('.open-popup');
        popypBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (screen.width > 768) {
                    popUp.style.display = 'block';

                } else {
                    popUp.style.display = 'block';
                }
            });
        });
        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close-form')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.form-content');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });
    };
    visitForm();

    const callBackForm = () => {
        const popUp = document.getElementById('callback_form'),
            popypBtn = document.querySelectorAll('.callback-btn');
        popypBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (screen.width > 768) {
                    popUp.style.display = 'block';

                } else {
                    popUp.style.display = 'block';
                }
            });
        });
        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close-form')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.form-content');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });
    };
    callBackForm();

    //валидатор
    const validator = () => {
        const phone1 = document.getElementById('callback_form1-phone');
        const phone2 = document.getElementById('callback_form2-phone');

        phone1.addEventListener('input', () => {
            phone1.value = phone1.value.replace(/[^0-9()\-+]+$/g, '');
        });
        phone2.addEventListener('input', () => {
            phone2.value = phone2.value.replace(/[^0-9()\-+]+$/g, '');
        });

        const callbackForm1 = document.querySelector('.form-content'),
            inputText = callbackForm1.querySelector('.input-text'),
            name1 = inputText.getElementsByTagName('input')[0];
        name1.addEventListener('input', () => {
            name1.value = name1.value.replace(/[^А-Яа-я\s]/g, '');
        });

        const callbackForm2 = document.getElementById('form2'),
            inputText2 = callbackForm2.querySelector('.input-text'),
            name2 = inputText2.getElementsByTagName('input')[0];
        name2.addEventListener('input', () => {
            name2.value = name2.value.replace(/[^А-Яа-я\s]/g, '');
        });
        const bannerForm = document.getElementById('banner-form-phone');
        bannerForm.addEventListener('input', () => {
            bannerForm.value = bannerForm.value.replace(/[^0-9()\-+]+$/g, '');
        });
        const bannerFormName = document.getElementById('banner-form-name');
        bannerFormName.addEventListener('input', () => {
            bannerFormName.value = bannerFormName.value.replace(/[^А-Яа-я\s]/g, '');
        });
        const bottomPhone = document.getElementById('bottom-phone');
        bottomPhone.addEventListener('input', () => {
            bottomPhone.value = bottomPhone.value.replace(/[^0-9()\-+]+$/g, '');
        });
        const bottomName = document.getElementById('bottom-name');
        bottomName.addEventListener('input', () => {
            bottomName.value = bottomName.value.replace(/[^А-Яа-я\s]/g, '');
        });
    };
    validator();

    //подарок
    const gift = () => {
        const popUp = document.getElementById('gift'),
            popypBtn = document.querySelectorAll('.gift'),
            giftImg = document.querySelector('.fixed-gift');
        popypBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (elem) {
                    event.preventDefault();
                    popUp.style.display = 'flex';
                    giftImg.style.display = 'none';

                } else {
                    popUp.style.display = 'flex';
                    giftImg.style.display = 'none';
                }
            });
        });
        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close-form') ||
            target.classList.contains('close-btn')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.form-content');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });
    };
    gift();


    //slider
    const slider = () => {
        const slide = document.querySelectorAll('.slide-text');
        let currentSlide = 0;
        let interval;
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
            interval;

        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'textSlide-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'textSlide-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        startSlide(1500);

    };
    slider();
    // banner
    const bannerForm = () => {
        const checkbox = document.getElementById('check1');
        const input = document.getElementById('sendForm');

        const toogleInput = function(e) {
            input.disabled = !e.target.checked;
        };

        toogleInput({ target: checkbox });
        checkbox.addEventListener("change", toogleInput);

    };
    bannerForm();
    // отправка формы
    const sendMenu = () => {
        const errorMessage = 'что-то пошло не так',
            loadMessage = 'Загрузка..',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся';
        const forms = document.querySelectorAll('.form');
        const statusMessage = document.createElement('div');
        statusMessage.textContent = '';
        statusMessage.style.cssText = 'font-size: 2em';
        statusMessage.style.cssText = 'color: #19b5fe';

        const postData = body => fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        });
        forms.forEach(form => {

            form.addEventListener('submit', event => {
                event.preventDefault();
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(form),
                    body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body).then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network is not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });

                form.reset();
            });
        });
    };
    sendMenu();


    //burger

    const burgerMenuPopup = () => {
        const popUp = document.querySelector('.popup-menu'),
            popypBtn = document.querySelectorAll('.burger-menu');
        popypBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (elem) {
                    popUp.style.display = 'flex';

                } else {
                    popUp.style.display = 'flex';
                }
            });
        });
        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close-burger')) {
                popUp.style.display = 'none';
            } else {
                target = !target.matches('a');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });
    };
    burgerMenuPopup();
    //СТИКИ БУРГЕР

    const stickyBurger = () => {
        const btnBurgerMenu = document.querySelector('.menu-button');
        const topMenu = document.querySelector('.top-menu');
        const head = document.querySelector('.head');

        const fixedMenu = () => {
            if (document.documentElement.clientWidth < 768) {
                btnBurgerMenu.style.display = `block`;
                const top = Math.ceil(head.getBoundingClientRect().bottom);

                if (top <= 0) {
                    topMenu.style.position = `fixed`;
                } else {
                    topMenu.style.position = 'relative';
                }
            } else {
                btnBurgerMenu.style.display = `none`;
                topMenu.style.position = 'relative';
            }
        };

        window.addEventListener('scroll', fixedMenu);
        window.addEventListener('resize', fixedMenu);
    };
    stickyBurger();

    //arrowUp
    const arrowUp = () => {
        window.onscroll = function() { myFunction(); };

        function myFunction() {
            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                document.getElementById("totop").style.display = "block";
            } else {
                document.getElementById("totop").style.display = "none";
            }
        }
    };
    arrowUp();

    //СПАСИБО ПОПАП
    const thanksPopup = () => {
        const popUp = document.getElementById('thanks'),
            popypBtn = document.getElementById('sendForm');

        popypBtn.addEventListener('click', () => {
            if (popypBtn) {
                popUp.style.display = 'block';

            } else {
                popUp.style.display = 'block';
            }
        });

        popUp.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close-form') ||
            target.classList.contains('close-btn')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.form-content');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });
    };
    thanksPopup();
    //СЛАЙДЕР НИЖНИЙ
    const lastslider = () => {
        const slider = document.querySelector('.gallery-slider'),
            slide = slider.querySelectorAll('.slide');

        let currentSlide = 0,
            interval;
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);

        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        const portfolioDots = document.querySelector('.gallery-dots');


        const slideDotAdd = () => {
            for (let i = 0; i < slide.length; i++) {
                const child = document.createElement('li');
                if (i === 0) {
                    child.classList.add('dot');
                    child.classList.add('dot-active');
                } else {
                    child.classList.add('dot');
                }
                portfolioDots.appendChild(child);
            }

        };
        slideDotAdd();

        const dot = document.querySelectorAll('.dot');

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'gallery-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'gallery-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;
            if (!target.matches('.gallery-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'gallery-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;

            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'gallery-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.gallery-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.gallery-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };
    lastslider();

    //средний слайдер средний слайдер средний слайдер средний слайдер
    const middleSlider = () => {
        const partners = document.querySelector('#services'),
            partnersSlider = partners.querySelector('.services-slider');
        partners.querySelector('#arrow-left').style.display = 'none';
        let current = 0;
        const hideElemet = 3;


        partners.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('#arrow-right')) {
                current++;
            } else if (target.closest('#arrow-left')) {
                current--;
            }

            if (current === hideElemet) {
                partners.querySelector('#arrow-right').style.display = 'none';
            } else {
                partners.querySelector('#arrow-right').style.display = 'flex';
            }

            if (current === 0) {
                partners.querySelector('#arrow-left').style.display = 'none';
            } else {
                partners.querySelector('#arrow-left').style.display = 'flex';
            }

            partnersSlider.style.transform = `translateX(-${current * 392}px)`;
        });
    };
    middleSlider();

    ///калькулятор
    const calc = () => {
        const form = document.getElementById('card_order');
        const months1 = document.querySelector('.months1');
        const months6 = document.querySelector('.months6');
        const months9 = document.querySelector('.months9');
        const months12 = document.querySelector('.months12');
        const total = document.getElementById('price-total');

        const cardMozaika = document.querySelector('.card_leto_mozaika');
        const cardShelkovo = document.querySelector('.card_leto_schelkovo');

        const countSum = () => {
            cardMozaika.onclick = () => {
                console.log(1);
                months1.addEventListener('click', () => {
                    if (months1) {
                        total.textContent = 2999;
                    }

                });
                months6.addEventListener('click', () => {
                    if (months6) {
                        total.textContent = 14999;
                    }

                });
                months9.addEventListener('click', () => {
                    if (months9) {
                        total.textContent = 21999;
                    }

                });
                months12.addEventListener('click', () => {
                    if (months12) {
                        total.textContent = 24999;
                    }

                });
            };
            cardShelkovo.onclick = () => {
                console.log(2);
                months1.addEventListener('click', () => {
                    if (months1) {
                        total.textContent = 1999;
                    }

                });
                months6.addEventListener('click', () => {
                    if (months6) {
                        total.textContent = 9999;
                    }

                });
                months9.addEventListener('click', () => {
                    if (months9) {
                        total.textContent = 13999;
                    }

                });
                months12.addEventListener('click', () => {
                    if (months12) {
                        total.textContent = 19999;
                    }

                });
            };
        };

        form.addEventListener('click', event => {
            const target = event.target;
            if (target.matches('input')) {
                countSum();
            }
        });


    };
    calc();




});
