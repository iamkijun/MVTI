// 0 ISTJ
// 1 ISTP
// 2 ISFJ
// 3 ISFP
// 4 INTJ
// 5 INTP
// 6 INFJ
// 7 INFP
// 8 ESTJ
// 9 ESTP
// 10 ESFJ
// 11 ESFP
// 12 ENTJ
// 13 ENTP
// 14 ENFJ
// 15 ENFP

const qnaList = [
  {
    q: "1. 당신의 영화 감상 스타일은?",
    a: [
      {
        answer: "a. 철저히 계획적으로! 개봉 예정일을 확인하고 미리 예매한다.",
        type: [1,5,9,13],
      },
      {
        answer: "b. 애인/가족/친구가 보자하면 따라가서 본다.",
        type: [4,5,12,13],
      },
      {
        answer: "c. 즉흥적으로! 혼자라도 땡기면 극장으로 간다.",
        type: [0,1,2,3]
      },
      {
        answer: "d. 보고 싶은 영화가 있으면 주변 사람들에게 보러가자고 한다.",
        type: [8,10,12,14] 
      }
    ],
  },
  {
    q: "2. 당신이 가장 좋아하는 디즈니 캐릭터는? ",
    a: [
      {
        answer: "a. 백설공주(백설공주)",
        type: [1],
      },
      {
        answer: "b. 뮬란(뮬란)",
        type: [4],
      },
      {
        answer: "c. 쟈스민(알라딘)",
        type: [5],
      },
      {
        answer: "d. 애리얼(인어공주)",
        type: [11],
      },
    ],
  },
  {
    q: "3. 당신의 고백 스타일은?",
    a: [
      {
        answer: "a. 상대방에게서 호감이 보이면 바로 고백한다",
        type: [8,9,12,13],
      },
      {
        answer: "b. 상대방이 고백할 때까지 기다린다",
        type: [0,2,4,6],
      },
      {
        answer: "c. 완벽한 분위기, 완벽한 타이밍에서 고백한다.",
        type: [8,10,12,14],
      },
      {
        answer: "d. 맨정신엔 못하겠다.. 술먹고 or 홧김에!!",
        type: [1,3,5,7],
      },
    ],
  },
  {
    q: "4. 일주일 뒤 코딩 테스트를 앞둔 당신",
    a: [
      {
        answer: 'a. 준비를 못했는데... 기간이 좀 더 주어졌으면 좋겠다. " ',
        type: [2,3,10,11],
      },
      {
        answer: 'b. 일주일이면 충분하지! 폐관수련 드가자~" ',
        type: [4,5,12,13],
      },
      {
        answer: "c. 일주일이나 남았다니... 그냥 빨리 봤으면 좋겠다! ",
        type: [3,7,11,15],
      },
    ],
  },
  {
    q: "5. 싸피 1학기 최종 프로젝트 페어를 구해야 하는 당신",
    a: [
      {
        answer: "a. 나랑 제일 친한 민형이랑 해야지!",
        type: [0,1,2,3],
      },
      {
        answer: "b. 우리반 코딩천재, 우제랑 해야지!",
        type: [0,1,8,9],
      },
      {
        answer: "c. 평소에 친해지고 싶었던 현준이랑 해야지!",
        type: [6,7,14,15],
      },
      {
        answer: "d. 코딩은 좀 못하더라도, 학습 태도가 성실한 상혁이랑 해야지!",
        type: [10,11,14,15],
      },
    ],
  },

  {
    q: "6. SSAFY 기자단에서 인터뷰 요청이 들어왔다! 당신의 반응은? ",
    a: [
      {
        answer: "a. 역시 싸피하면 나, 내가 인터뷰를 안하면 누가하겠어!",
        type: [12,13,14,15],
      },
      {
        answer: "b. 음.. 해보고 싶긴 하는데 약간 부끄러운걸?",
        type: [2,3,6,7],
      },
      {
        answer: "c. 뭔 인터뷰야, 내가 그걸 왜해, 안해!",
        type: [0,1,8,9],
      },
      {
        answer: "d. 나 말고 더 잘할 것 같은 기준이를 추천한다.",
        type: [4,5,6,7],
      },
    ],
  },
  {
    q: "7. (당신이 축구를 좋아한다면) 오늘 5반이랑 축구 시합이 있대!",
    a: [
      {
        answer: "a. 이런 중요한 경기에 내가 빠질수가 있나? 무조건 고!",
        type: [12,13,14,15],
      },
      {
        answer: "b. 하고싶긴 한데, 부끄럽기도 하고.. 귀찮아서 안할래!",
        type: [1,3,5,7],
      },
      {
        answer: "c. 하기 싫지만.. 같이 해달라 그러니까 해야겠다!",
        type: [9,11,13,15],
      },
      {
        answer: "d. 내가 필요하다 그래도 어쩔수 없어. 오늘은 안할래.",
        type: [0,2,4,6],
      },
    ],
  },
  {
    q: "8. (당신은 방탈출을 좋아한다면) 오늘 싸피 끝나고 방탈출 하러갈래? ",
    a: [
      {
        answer: "a. 완전 어려운 난이도로 가자!.",
        type: [6,7,14,15],
      },
      {
        answer: "b. 그래! 대신 테마는 너가 골라 ~.",
        type: [9,11,13,15],
      },
      {
        answer: "c. 아니~ 이번주는 쉴게!",
        type: [0,2,8,10],
      },
    ],
  },
  {
    q: "9. 오늘 15일인데 싸월급이 안들어 온다..",
    a: [
      {
        answer: "a. 뭐.. 언젠가 연락 오겠지. 내 할일 하며 기다린다",
        type: [4,5,12,13],
      },
      {
        answer:
          "b. 초조해서 서울 오픈 채팅방에서 민경이에게 언제 들어오는지 물어본다.",
        type: [2,3,6,7],
      },
      {
        answer: "c. 싸무국에 전화해서 언제 지급 예정인지 물어본다.",
        type: [8,10,12,14],
      },
    ],
  },
  {
    q: "10. 내가 가장 좋아하는 마블 캐릭터는? ",
    a: [
      {
        answer: "a. 닥터스트레인지",
        type: [4],
      },
      {
        answer: "b. 헐크",
        type: [5],
      },
      {
        answer: "c. 앤트맨",
        type: [10],
      },
      {
        answer: "d. 블랙팬서",
        type: [11],
      },
    ],
  },
  {
    q: "11. 내가 관심있는 직무는? ",
    a: [
      {
        answer: "a. 사람들에게 보여지는 서비스를 제공하는 프론트엔드 개발!.",
        type: [8,10,12,14],
      },
      {
        answer: "b. 뒤에서 묵묵하게 자기 할일을 하는 묵직한 백엔드 개발!.",
        type: [0,2,4,6],
      },
      {
        answer: "c. 난 아직 모르겠어 ㅠ",
        type: [5,7,13,15],
      },
      {
        answer: "d. 관심있는 건 있는데, 아직 다른 사람들에게 말할만큼 진심은 아니야...",
        type: [1,3,9,11],
      }
    ],
  },
  {
    q: "12. 최종 프로젝트를 진행하던 도중 페어와 크게 다퉜다. 앞으로 어떻게 할 것인가?",
    a: [
      {
        answer:
          'a. "야! 너 목소리 낮춰. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.',
        type: [9,11,13,15],
      },
      {
        answer: 'b. "아니 그건 아니고, 하.." 조용히 운다.',
        type: [2,3,6,7],
      },
      {
        answer:
          "c. 우리 그래도 프로젝트는 해야지.. 화낸건 내가 미안하고, 일단 마무리부터 하자.",
        type: [0,1,8,9],
      },
    ],
  },
  {
    q: "13. 싸피 2학기 시작을 앞둔 당신",
    a: [
      {
        answer:
          'a. 아니 2학기라니 너무 기대되잖아? 어떤 프로젝트를 할까? 새로운 친구들은 어떤 친구들일까?',
        type: [12,13,14,15],
      },
      {
        answer:
          'b. 뭐했다고 벌써 2학기라는 거지... 2학기로 넘어가기 싫다. 시간이 너무 빨라',
        type: [4,5,12,13],
      },
      {
        answer: 'c. 우리반 친구들이랑 헤어지기 아쉬워 ㅠㅠ',
        type: [6,7,14,15],
      },
      {
        answer:
          "d. 그냥 하면 하는거지..",
        type: [0,1,8,9],
      },
    ],
  },
  {
    q: "14. 다음 중 당신이 가장 좋아하는 걸그룹 멤버는?",
    a: [
      {
        answer:
          'a. 손나은(에이핑크)',
        type: [4],
      },
      {
        answer:
          'b. 태연(소녀시대)',
        type: [6],
      },
      {
        answer: 'c. 우기(G-IDLE)',
        type: [10],
      },
      {
        answer:
          "d. 윤아(소녀시대)",
        type: [11],
      },
    ],
  },
  {
    q: "15. 싸피 휴가가 12월 5일부터 9일까지입니다. 당신이 제일 하고 싶은건?",
    a: [
      {
        answer:
          'a. 밀린 TIL도 정리하고, 부족한 알고리즘 공부도 해야지. 생각해보니 영어공부도 해야돼ㅠㅠ',
        type: [2,3,10,11],
      },
      {
        answer:
          'b. 휴가? 그때 가서 생각하지 뭐.',
        type: [3,7,11,15],
      },
      {
        answer: 'c. 집에서 잠좀 자고... 에너지 충전좀 해야겠다.',
        type: [0,1,8,9],
      },
      {
        answer:
          "d. 못만났던 친구도 만나고, 시간을 알차게 보내야지!",
        type: [8,10,12,14],
      },
    ],
  },
  {
    q: "16. MVTI를 해본 소감은?",
    a: [
      {
        answer:
          'a. "오, 어떤 결과가 나올지 궁금해!!',
        type: [12,13,14,15],
      },
      {
        answer:
          'b. 이거 신빙성 있는거 맞음??',
        type: [0,1,2,3],
      },
      {
        answer: 'c. 귀찮은데 왜 시키는거임?',
        type: [4,5,6,7],
      },
      {
        answer:
          "d. 만드느라 애썼네..",
        type: [8,9,10,11],
      },
    ],
  },
]

const infoList = [
  {
    name: "<ISTJ>",
    desc: "ISTJ, 청렴결백한 논리주의자, 현실주의자. 영화속 캐릭터 가운데 해리하트와 유사합니다!",
    reco: "개발자 추천 ISTJ가 좋아하는 영화는 '킹스맨: 시크릿 에이전트'입니다!",
    info: "https://www.themoviedb.org/movie/207703-kingsman-the-secret-service?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/9trg6xOTadyHOkl5rN5nlLjx4L8.jpg",
  },
  {
    name: "<ISTP>",
    desc: "ISTP, 만능 재주꾼, 장인. 영화속 캐릭터 가운데 울버린과 유사합니다!",
    reco: "개발자 추천 ISTP가 좋아하는 영화는 '엑스맨: 데이즈 오브 퓨처 패스트'입니다!",
    info: "https://www.themoviedb.org/movie/127585-x-men-days-of-future-past?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/zm5zanw86TX2T7qJNTKilL3x3S8.jpg",
  },
  {
    name: "<ISFJ>",
    desc: "ISFJ, 용감한 수호자, 실용적인 조력가. 영화속 캐릭터 가운데 캡틴아메리카와 유사합니다!",
    reco: "개발자 추천 ISFJ가 좋아하는 영화는 '캡틴 아메리가: 시빌 워'입니다!",
    info: "https://www.themoviedb.org/movie/271110-captain-america-civil-war?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/vaMRzME3Dt73robEjOtDw4SPJGA.jpg",
  },
  {
    name: "<ISFP>",
    desc: "ISFP, 호기심 많은 예술가, 성인군자형. 영화속 캐릭터 가운데 해리포터와 유사합니다!",
    reco: "개발자 추천 ISFP가 좋아하는 영화는 '해리 포터와 죽음의 성물 1'입니다!",
    info: "https://www.themoviedb.org/movie/12444-harry-potter-and-the-deathly-hallows-part-1?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/lOXvz8HrgOkp7AXGQp1APKeZqag.jpg",
  },
  {
    name: "<INTJ>",
    desc: "INTJ, 용의주도한 전략가, 과학자형. 영화속 캐릭터 가운데 닥터스트레인지와 유사합니다!",
    reco: "개발자 추천 INTP가 좋아하는 영화는 '닥터 스트레인지'입니다!",
    info: "https://www.themoviedb.org/movie/284052-doctor-strange?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/xA7ic72L0mejJX1SYMU38F7wwiF.jpg",
  },
  {
    name: "<INTP>",
    desc: "INTP, 논리적인 사색가, 논리술사, 영화속 캐릭터 가운데 요다와 유사합니다!",
    reco: "개발자 추천 INTP가 좋아하는 영화는 '스타워즈: 라스트 제다이'입니다!",
    info: "https://www.themoviedb.org/movie/181808-star-wars-the-last-jedi?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/zRvMTCzUVnkdW9lno9HQwrigWSr.jpg",
  },
  {
    name: "<INFJ>",
    desc: "INFJ, 통찰력 있는 선지자, 예언자형. 영화속 캐릭터 가운데 간달프와 유사합니다!",
    reco: "개발자 추천 INFJ가 좋아하는 영화는 '반지의 제왕: 반지 원정대'입니다!",
    info: "https://www.themoviedb.org/movie/120-the-lord-of-the-rings-the-fellowship-of-the-ring?language=ko",
    imag: "https://www.themoviedb.org/movie/120-the-lord-of-the-rings-the-fellowship-of-the-ring?language=ko",
  },
  {
    name: "<INFP>",
    desc: "INFP, 중재자, 잔 다르크형. 영화속 캐릭터 가운데 스칼렛위치와 유사합니다!",
    reco: "개발자 추천 INFP가 좋아하는 영화는 '닥터 스트레인지: 대혼돈의 멀티버스'입니다!",
    info: "https://www.themoviedb.org/movie/453395-doctor-strange-in-the-multiverse-of-madness?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/vL5ktZauR0fZMDOHKjakb1idhuU.jpg",
  },
  {
    name: "<ESTJ>",
    desc: "ESTJ, 엄격한 관리자, 경영자. 영화속 캐릭터 가운데 헤르미온느와 유사합니다!",
    reco: "개발자 추천 ESTJ가 좋아하는 영화는 '해리 포터와 죽음의 성물 1'입니다!",
    info: "https://www.themoviedb.org/movie/12444-harry-potter-and-the-deathly-hallows-part-1?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/lOXvz8HrgOkp7AXGQp1APKeZqag.jpg",
  },
  {
    name: "<ESTP>",
    desc: "ESTP, 모험을 즐기는 사업가, 수완 좋은 활동가형. 영화속 캐릭터 가운데 버즈 라이트이어와 유사합니다!",
    reco: "개발자 추천 ESTP가 좋아하는 영화는 '버즈 라이트이어'입니다!",
    info: "https://www.themoviedb.org/movie/718789-lightyear?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/oMa5NjFxK8Csp6uVQ0tRuF1pWM5.jpg",
  },
  {
    name: "<ESFJ>",
    desc: "ESFJ, 사교적인 외교관, 친선도모형. 영화속 캐릭터 가운데 우디와 유사합니다!",
    reco: "개발자 추천 ESFJ가 좋아하는 영화는 '토이스토리 4'입니다!",
    info: "https://www.themoviedb.org/movie/301528-toy-story-4?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/9P8IX4UyH3QFLL4MV6GZyuOB7Ue.jpg",
  },
  {
    name: "<ESFP>",
    desc: "ESFP, 자유로운 영혼의 연예인, 슈퍼스타형. 영화속 캐릭터 가운데 할리퀸과 유사합니다!",
    reco: "개발자 추천 ESFP가 좋아하는 영화는 '수어사이드 스쿼드'입니다!",
    info: "https://www.themoviedb.org/movie/297761-suicide-squad?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/Asdg1qtpCXR4kIj3ASmwmtMtOzY.jpg",
  },
  {
    name: "<ENTJ>",
    desc: "ENTJ, 대담한 통솔자, 지도자형. 영화속 캐릭터 가운데 임모탄과 유사합니다!",
    reco: "개발자 추천 ENTJ가 좋아하는 영화는 '매드맥스:분노의도로'입니다!",
    info: "https://www.themoviedb.org/movie/76341-mad-max-fury-road?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/cadVm6gKYYukmPysHGCwrawUHHa.jpg",
  },
  {
    name: "<ENTP>",
    desc: "ENTP, 뜨거운 논쟁을 즐기는 변론가, 발명가형. 영화속 캐릭터 가운데 아이언맨과 유사합니다!",
    reco: "개발자 추천 ENTP가 좋아하는 영화는 '캡틴 아메리가: 시빌 워'입니다!",
    info: "https://www.themoviedb.org/movie/271110-captain-america-civil-war?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/vaMRzME3Dt73robEjOtDw4SPJGA.jpg",
  },
  {
    name: "<ENFJ>",
    desc: "ENFJ, 선도자, 언변능숙형. 영화속 캐릭터 가운데 원더우먼과 유사합니다!",
    reco: "개발자 추천 ENFJ가 좋아하는 영화는 '원더우먼'입니다!",
    info: "https://www.themoviedb.org/movie/297762-wonder-woman?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/oZGYR75RaSLQ8XdJIVerYnOdhFx.jpg",
  },
  {
    name: "<ENFP>",
    desc: "ENFP, 재기발랄한 활동가, 스파크형. 영화속 캐릭터 가운데 피터파커와 유사합니다!",
    reco: "개발자 추천 ENFP가 좋아하는 영화는 '스파이더맨:노웨이홈'입니다!",
    info: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home?language=ko",
    imag: "https://www.themoviedb.org/t/p/original/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
  },
]