const mainPage = (function () {
  let mode = 'EASY';
  let user = {
    name: 'John',
    session: false
  };
  let categories = [
    {
      id: 1,
      name: 'DOM'
    },
    {
      id: 2,
      name: 'THIS'
    },
    {
      id: 3,
      name: 'CLOUSER'
    },
    {
      id: 4,
      name: 'LET/CONST'
    },
    {
      id: 5,
      name: 'EVENT'
    }
  ];

  const setUser = _user => {
    user = _user;
    document.querySelector('.user__name').textContent = user.name;
    localStorage.setItem('userName', user.name);
  };

  const getUserSession = () => localStorage.getItem('userName');
  const fetch = () => {
    document.body.style.setProperty(
      'overflow-y',
      getUserSession() ? 'scroll' : 'hidden'
    );
    document.body.className = 'main';
    document.body.innerHTML = `
    <section class="profile-container">
    <div role="button" class="btn profile">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <section class="user">
      <h2 class="user__name">${user.name}</h2>
      <div class="user__status">
        <section class="user__status-circle">
          <svg class="user__status-svg" viewBox="-1 -1 34 34">
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              class="progress-bar__background"
            />

            <circle
              cx="16"
              cy="16"
              r="15.9155"
              class="progress-bar__progress js-progress-bar"
            />
          </svg>
          <div class="user__status-content">
            <p class="progress-title">Study</p>
            <span class="progress-rate">55%</span>
          </div>
        </section>
        <section class="user__status-circle">
          <svg viewBox="-1 -1 34 34">
            <circle
              cx="16"
              cy="16"
              r="15.9155"
              class="progress-bar__background"
            />

            <circle
              cx="16"
              cy="16"
              r="15.9155"
              class="progress-bar__progress js-progress-bar"
            />
          </svg>
          <div class="user__status-content">
            <p class="progress-title">Correct</p>
            <span class="progress-rate">87%</span>
          </div>
        </section>
      </div>
      <div class="user__more-btn" role="button">MORE</div>
      <section class="user__more-info">MORE INFO</section>
    </section>
  </section>
  <section class="ocean">
    <div
      class="bubble bubble-rising"
      style="width: 20px; height: 25px; left: 54%; bottom: 70%"
    ></div>
    <div
      class="bubble bubble-rising"
      style="width: 30px; height: 30px; left: 29%; bottom: 63%"
    ></div>
    <div
      class="bubble bubble-rising"
      style="width: 24px; height: 24px; left: 14%; bottom: 30%"
    ></div>
    <div
      class="bubble bubble-rising"
      style="width: 35px; height: 35px; left: 79%; bottom: 56%"
    ></div>
  </section>
  <div class="boat">
    <div class="cabin"></div>
    <div class="top"></div>
    <div class="pole"></div>
  </div>
  <div class="land">
    <div class="tree">
      <div class="leaf"></div>
      <div class="leaf left"></div>
    </div>
  </div>
  <div class="sun">
    <div class="cloud"></div>
  </div>
  <div class="moon"></div>
  <div class="stars"></div>
  <div class="bird"></div>
  <div class="bird two"></div>
  <div class="bird three"></div>
  <div for="checkbox" class="btn mode" role="button">HARD</div>
  ${
    !getUserSession()
      ? `<div class="overlay">
    <section class="login">
      <div class="login-logo">
        <div class="sea">
          <div class="circle-wrapper">
            <div class="bubble"></div>
            <div class="submarine-wrapper">
              <div class="submarine-body">
                <div class="window"></div>
                <div class="engine"></div>
                <div class="light"></div>
              </div>
              <div class="helix"></div>
              <div class="hat">
                <div class="leds-wrapper">
                  <div class="periscope"></div>
                  <div class="leds"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="#" method="GET" class="login-form">
          <label for="userName" class="login-label">LOGIN DIVER !</label>
          <input
            type="text"
            name="userName"
            id="userName"
            class="login-input"
            maxlength="15"
          />
          <button type="submit" class="login-btn">GO DIVE</button>
        </form>
      </div>
    </section>
  </div>`
      : ''
  }
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    init() {
      fetch();

      const throttle = (callback, delay) => {
        let timerId = null;

        return e => {
          if (timerId) return;
          callback(e);
          timerId = setTimeout(() => {
            timerId = null;
          }, delay);
        };
      };

      // 1. renderCategories
      (function renderCategories() {
        const $fragment = document.createDocumentFragment();
        // const $shark = document.createElement('div');
        // $shark.className = 'shark';
        // $shark.innerHTML = `
        //       <div class="shark__body">
        //         <div class="shark__eye"></div>
        //         <div class="shark__mouth">
        //           <div class="mouth__tooth--1"></div>
        //           <div class="mouth__tooth--2"></div>
        //           <div class="mouth__tooth--3"></div>
        //           <div class="mouth__tooth--4"></div>
        //           <div class="mouth__tooth--5"></div>
        //           <div class="mouth__tooth--6"></div>
        //           <div class="mouth__tooth--7"></div>
        //           <div class="mouth__tooth--8"></div>
        //           <div class="mouth__tooth--9"></div>
        //           <div class="mouth__tooth--10"></div>
        //           <div class="mouth__tooth--11"></div>
        //           <div class="mouth__tooth--12"></div>
        //           <div class="mouth__tooth--13"></div>
        //           <div class="mouth__tooth--14"></div>
        //           <div class="mouth__tooth--15"></div>
        //           <div class="mouth__tooth--16"></div>
        //           <div class="mouth__tooth--17"></div>
        //           <div class="mouth__tooth--18"></div>
        //           <div class="mouth__tooth--19"></div>
        //           <div class="mouth__tooth--20"></div>
        //           <div class="mouth__tooth--21"></div>
        //           <div class="mouth__tooth--22"></div>
        //           <div class="mouth__tooth--23"></div>
        //           <div class="mouth__tooth--24"></div>
        //           <div class="mouth__tooth--25"></div>
        //           <div class="mouth__tooth--26"></div>
        //           <div class="mouth__tooth--27"></div>
        //           <div class="mouth__tooth--28"></div>
        //         </div>
        //       </div>
        // `;
        categories.forEach(({ name }, idx) => {
          const $category = document.createElement('div');

          $category.className = 'category';
          $category.setAttribute('role', 'button');
          $category.innerHTML = `
            <p class='category__name'>${name}</p>
          `;
          $category.style.setProperty('top', (idx + 1) * 500 + 100 + 'px');
          $category.style.setProperty('left', Math.random() * 50 + 20 + '%');
          $fragment.appendChild($category);
        });
        // $fragment.append($shark);

        document.querySelector('.ocean').appendChild($fragment);
      })();

      // 2. bubble logic
      (function startBubbleMaking() {
        const $ocean = document.querySelector('.ocean');
        const numBubbles = 30;
        const minSize = 20;
        const maxSize = 40;

        // Get the size of a bubble.
        // Randomized between minSize and maxSize.
        function bubbleSize() {
          return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
        }

        // Get the location of a bubble.
        // Between left=2% and left=98%.
        function bubbleLocation() {
          return Math.floor(Math.random() * 96) + 2;
        }

        // Create a bubble using the previous two functions.
        function createBubble() {
          const size = bubbleSize();
          const location = bubbleLocation();
          const $bubble = document.createElement('div');

          $bubble.classList.add('bubble', 'bubble-rising');
          $bubble.setAttribute(
            'style',
            `width: ${size}px; height: ${size}px; left: ${location}%; bottom: ${
              Math.random() * 20
            }%`
          );

          $ocean.appendChild($bubble);
        }

        // Start adding bubbles.
        (function startBubbles() {
          let i = 0;
          let timerId;

          function addBubble() {
            if (i < numBubbles) {
              createBubble();
              i++;
              return;
            }

            clearInterval(timerId);
          }

          // Add a bubble every 1s.
          timerId = setInterval(addBubble, 1000);
        })();
      })();

      // 3. addEventListeners
      (function bindEventListeners() {
        (function modeToggleBtn() {
          const modeBtn = document.querySelector('.mode');
          const birds = document.querySelectorAll('.bird');
          const sun = document.querySelector('.sun');
          const moon = document.querySelector('.moon');
          const boat = document.querySelector('.boat');
          const stars = document.querySelector('.stars');

          modeBtn.addEventListener(
            'click',
            throttle(() => {
              if (mode === 'HARD') {
                // EASY MODE
                mode = 'EASY';
                document.body.classList.remove('night');
                modeBtn.textContent = 'HARD';
                sun.classList.remove('night');
                moon.classList.remove('night');
                stars.classList.remove('night');
                boat.classList.remove('night');
                birds.forEach(bird => bird.classList.remove('night'));

                return;
              }
              // HARD MODE
              mode = 'HARD';
              document.body.classList.add('night');
              modeBtn.textContent = 'EASY';
              birds.forEach(bird => bird.classList.add('night'));
              sun.classList.add('night');
              moon.classList.add('night');
              stars.classList.add('night');
              boat.classList.add('night');
            }, 500)
          );
        })();

        document.querySelector('.ocean').addEventListener('click', e => {
          if (!e.target.matches('.category, .category__name')) return;
          gamePage.start(mode);
        });

        document.querySelector('.profile').addEventListener(
          'click',
          throttle(e => {
            if (
              !e.target
                .closest('.profile-container')
                .classList.contains('active')
            ) {
              // TODO: 리팩토링
              const percentageCompletes = [0.55, 0.87];
              const strokeDashOffsetValues = [
                100 - percentageCompletes[0] * 100,
                100 - percentageCompletes[1] * 100
              ];
              const $progressBars =
                document.querySelectorAll('.js-progress-bar');
              [...$progressBars].forEach(($bar, idx) => {
                $bar.style.setProperty(
                  'stroke-dashoffset',
                  strokeDashOffsetValues[idx]
                );
              });
            } else {
              // TODO: 리팩토링
              const percentageCompletes = [0, 0];
              const strokeDashOffsetValues = [
                100 - percentageCompletes[0] * 100,
                100 - percentageCompletes[1] * 100
              ];
              const $progressBars =
                document.querySelectorAll('.js-progress-bar');
              [...$progressBars].forEach(($bar, idx) => {
                $bar.style.setProperty(
                  'stroke-dashoffset',
                  strokeDashOffsetValues[idx]
                );
              });
            }
            e.target.closest('.profile-container').classList.toggle('active');
          }, 500)
        );

        if (!getUserSession()) {
          document.querySelector('.overlay').addEventListener('submit', e => {
            e.preventDefault();
            const userName = document
              .querySelector('.login-input')
              .value.trim();

            if (!userName) return;
            setUser({ name: userName, session: true });
            document.querySelector('.overlay').remove();

            (function greeting() {
              const $greeting = document.createElement('h2');
              $greeting.className = 'greeting';
              $greeting.textContent = `Let's Dive ${user.name} !`;
              document.body.append($greeting);
              document.body.style.setProperty('overflow-y', 'scroll');

              setTimeout(() => {
                $greeting.remove();
              }, 1500);
            })();
          });
        }
      })();
    },

    render() {
      this.init();
    }
  };
})();

mainPage.render();

const renderGameBackground = () => {
  document.body.innerHTML = `
    <section class="ocean">
      <div class="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="fish">
        <!-- eyes -->
        <span></span>
        <span></span>
        <!-- mouth -->
        <span></span>
        <!-- bubbles -->
        <span></span>
        <span></span>
        <span></span>
      </div>
      <aside class="oxygen-tank">
        <div class="oxygen"></div>
      </aside>
    </section>`;
};

// 산소통 구현
const oxygenTankModule = (() => {
  let _oxygen = 100;
  let _inhaleValue = 0.5;
  const $oxygenTank = document.querySelector('.oxygen-tank');

  const inhaleOxygen = amount => {
    _oxygen -= amount;
  };

  const init = () => {
    const intervalId = setInterval(() => {
      inhaleOxygen(_inhaleValue);

      $oxygenTank.style.setProperty('--amount', _oxygen);

      if (_oxygen <= 0) {
        clearInterval(intervalId);
      }
    }, 100);
  };

  const setInhaleValue = value => {
    _inhaleValue = value;
  };

  return {
    inhaleOxygen,
    init,
    setInhaleValue
  };
})();

const gamePage = (function () {
  // data
  const PROBLEM_TYPES = {
    MULTIPLE_SINGLE: 0,
    MULTIPLE_MULTIPLE: 1,
    OX: 2,
    SHORT: 3
  };

  const PROBLEMS = [
    {
      id: 1,
      type: PROBLEM_TYPES.MULTIPLE_SINGLE,
      question:
        '하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름을 의미하는 것은 다음 중 무엇인가?',
      sub: '',
      options: [
        { id: 1, content: '표현식' },
        { id: 2, content: '변수' },
        { id: 3, content: '객체' },
        { id: 4, content: '스코프' }
      ]
    },
    {
      id: 2,
      type: PROBLEM_TYPES.OX,
      question: '자바스크립트에서는 함수도 값이다.',
      sub: '',
      options: [
        { id: 1, content: 'O' },
        { id: 2, content: 'X' }
      ]
    },
    {
      id: 3,
      type: PROBLEM_TYPES.MULTIPLE_SINGLE,
      question: '자바스크립트에서 다음 중 객체 타입이 아닌 것을 고르시오.',
      sub: '',
      options: [
        { id: 1, content: '배열' },
        { id: 2, content: '객체' },
        { id: 3, content: '함수' },
        { id: 4, content: '심벌' }
      ]
    },
    {
      id: 4,
      type: PROBLEM_TYPES.SHORT,
      question: '다음은 어떤 결과를 반환할까요?',
      sub: '[1, 2, 3, 4].reduce((acc, cur) => acc + cur ** 2, 1);',
      options: []
    },
    {
      id: 5,
      type: PROBLEM_TYPES.MULTIPLE_MULTIPLE,
      question: '다음 중 옳은 것을 모두 고르시오',
      sub: '',
      options: [
        {
          id: 1,
          content: '클로저는 해당 함수와 그 함수의 렉시컬 환경의 조합이다.'
        },
        {
          id: 2,
          content: '자바스크립트에서는 함수도 값이다.'
        },
        {
          id: 3,
          content: '자바스크립트의 배열은 기본적으로 희소배열이 아니다.'
        },
        {
          id: 4,
          content: '브라우저는 싱글 스레드다.'
        }
      ]
    }
  ];

  const ANSWERS = [
    {
      problemId: 1,
      answers: ['2']
    },
    {
      problemId: 2,
      answers: ['1']
    },
    {
      problemId: 3,
      answers: ['4']
    },
    {
      problemId: 4,
      answers: ['31']
    },
    {
      problemId: 5,
      answers: ['1', '2']
    }
  ];

  // elements
  const $body = document.body;

  // states
  let currentProblemIdx = 0;
  let userAnswers = [];
  const problems = [...PROBLEMS].map(problem => ({
    ...problem,
    completed: false
  }));

  // game initial settings
  const init = () => {
    renderGameBackground();
    $body.className = 'game';
  };

  const renderResult = () => {
    const checkCorrectness = () => {
      const isEqual = (array1, array2) => {
        if (array1.length !== array2.length) return false;
        array1.sort();
        array2.sort();
        for (let i = 0; i < array1.length; i++) {
          if (array1[i] !== array2[i]) return false;
        }

        return true;
      };

      userAnswers.forEach(userAnswer => {
        const correctAnswer = ANSWERS.find(
          answer => answer.problemId === userAnswer.problemId
        );
        userAnswer.correct = isEqual(correctAnswer.answers, userAnswer.answer);
      });
    };

    checkCorrectness();
    const correct = userAnswers.filter(userAnswer => userAnswer.correct).length;
    const totalCnt = problems.length;
    const $result = document.createElement('section');
    $result.className = 'result-container';
    $result.innerHTML = `
      <div class="overlay"></div>
      <div class="result">
        <div class="user-name">
          <span>&#127881;</span>
          great! John
          <span>&#127881;</span>
        </div>
        <div class="user-score">${correct} / ${totalCnt}
        <button class="close"></button>
      </div>
    `;

    $body.appendChild($result);

    $result.addEventListener('click', e => {
      if (!e.target.matches('.overlay')) return;
      mainPage.render();
    });
  };

  const renderProblem = () => {
    const next = idx => {
      problems[currentProblemIdx].completed = true;
      currentProblemIdx = idx + 1;
      renderProblem();
    };

    // $body.innerHTML = '';

    const $options = (() => {
      const { id: problemId, type, options } = problems[currentProblemIdx];

      switch (type) {
        case PROBLEM_TYPES.MULTIPLE_SINGLE:
          return options
            .map(
              ({ id, content }, idx) => `
              <div class="starfish" style="display:inline-block; margin: 25px 50px;vertical-align:top;">
                <div class="fish-leg"></div>
                <div class="fish-face">
                  <div class="fish-smile">
                    <div class="fish-tongue"></div>
                  </div>
                </div>     
              </div>
              <input
                type="radio"
                id=question${problemId}-option${id}
                data-problem-id=${problemId}
                data-option-id=${id}
                name="option"
              />
              <label class='multiple ${
                idx % 2 === 0 ? 'even' : ''
              }' for=question${problemId}-option${id}>
                ${content}
              </label>
            `
            )
            .join('');
        case PROBLEM_TYPES.MULTIPLE_MULTIPLE:
          return options
            .map(
              ({ id, content }, idx) => `
              <div class="starfish" style="display:inline-block; margin: 25px 50px;vertical-align:top;">
              <div class="fish-leg"></div>
              <div class="fish-face">
                <div class="fish-smile">
                  <div class="fish-tongue"></div>
                </div>
              </div>     
            </div>
              <input
                type="checkbox"
                id=problem${problemId}-option${id}
                data-problem-id=${problemId}
                data-option-id=${id}
                name="option"
                ${id === 1 ? 'checked focus' : ''}
              />
              <label class='multiple ${
                idx % 2 === 0 ? 'even' : ''
              }' for=problem${problemId}-option${id}>
                ${content}
              </label>
            `
            )
            .join('');
        case PROBLEM_TYPES.OX:
          return options
            .map(
              ({ id, content }) => `
              <div class="starfish" style="display:inline-block; margin: 25px 50px;vertical-align:top;">
              <div class="fish-leg"></div>
              <div class="fish-face">
                <div class="fish-smile">
                  <div class="fish-tongue"></div>
                </div>
              </div>     
            </div>
              <input
                type="radio"
                id=problem${problemId}-option${id}
                data-problem-id=${problemId}
                data-option-id=${id}
                name="option"
              />
              <label class='multiple' for=problem${problemId}-option${id}>
                ${content}
              </label>
            `
            )
            .join('');
        case PROBLEM_TYPES.SHORT:
          return `
            <input
              type="text"
              placeholder="답을 입력하세요"
              id=question${problemId}
              data-problem-id=${problemId}
            />
          `;
        default:
          return '';
      }
    })();

    // 문제 번호 링크
    // const $problemLinks = (() => {
    //   const CLASS_PROBLEM_LINKS = 'problem-links';
    //   const $container = document.createElement('ol');
    //   $container.className = CLASS_PROBLEM_LINKS;
    //   $container.innerHTML = problems
    //     .map(
    //       (problem, idx) => `
    //       <li data-problem-idx=${idx}>
    //         <button ${problem.completed ? 'disabled' : ''}>
    //           ${problem.id}
    //         </button>
    //       </li>
    //     `
    //     )
    //     .join('');

    //   $container.addEventListener('click', e => {
    //     if (!e.target.matches(`ol.${CLASS_PROBLEM_LINKS} > li > button`)) {
    //       return;
    //     }
    //     getProblemByIdx(+e.target.parentNode.dataset.problemIdx);
    //   });
    //   return $container;
    // })();

    const $container = document.createElement('section');
    $container.className = 'problem';
    const $form = document.createElement('form');
    $form.className = 'form';
    $form.innerHTML = `
      <fieldset>
        <legend>
          ${problems[currentProblemIdx].question}
        </legend>
        <div>
          ${problems[currentProblemIdx].sub}
        </div>
        ${$options}
        <button type="submit">
          제출
        </button>
      </fieldset>
    `;
    $container.appendChild($form);

    // 문제 번호 링크 DOM에 추가
    // $container.appendChild($problemLinks);
    $body.appendChild($container);
    console.log(document.querySelectorAll('label'));

    $form.addEventListener('submit', e => {
      e.preventDefault();

      const currentProblemType = problems[currentProblemIdx].type;

      let $inputs;
      switch (currentProblemType) {
        case PROBLEM_TYPES.SHORT:
          $inputs = [...e.target.querySelectorAll('input[type=text]')];
          break;
        case PROBLEM_TYPES.MULTIPLE_MULTIPLE:
          $inputs = [
            ...e.target.querySelectorAll('input[type=checkbox]:checked')
          ];
          break;
        case PROBLEM_TYPES.MULTIPLE_SINGLE:
          $inputs = [...e.target.querySelectorAll('input[type=radio]:checked')];
          break;
        case PROBLEM_TYPES.OX:
          $inputs = [...e.target.querySelectorAll('input[type=radio]:checked')];
          break;
        default:
          break;
      }

      const problemId = +$inputs[0].dataset.problemId;
      const userAnswerForProblem = userAnswers.find(
        userAnswer => userAnswer === problemId
      );

      // 문제에 대한 기존의 답이 있을 경우
      // if (userAnswerForProblem) {
      //   userAnswerForProblem.answer = [
      //     ...userAnswerForProblem.answer,
      //     ...(currentProblemType === PROBLEM_TYPES.SHORT
      //       ? $inputs.map($input => $input.value)
      //       : $inputs.map($input => $input.dataset.optionId))
      //   ];
      // }

      // 문제에 대한 기존의 답이 없을 경우
      userAnswers = [
        ...userAnswers,
        {
          problemId: +$inputs[0].dataset.problemId,
          answer: [
            ...(currentProblemType === PROBLEM_TYPES.SHORT
              ? $inputs.map($input => $input.value)
              : $inputs.map($input => $input.dataset.optionId))
          ],
          correct: false
        }
      ];

      $container.classList.add('completed');

      // 마지막 문제일 경우, 테스트 결과 보여주기
      if (!problems[currentProblemIdx + 1]) {
        renderResult();
        return;
      }

      // 마지막 문제가 아닐경우, 다음 문제 보여주기
      next(currentProblemIdx);
    });
  };

  return {
    start() {
      init();
      renderProblem();
    },
    end() {}
  };
})();

gamePage.start();
