var store = [{
        "title": "[Machine Learning] 기계의 학습법",
        "excerpt":"2016년 3월, 불가능 할 것으로 여겨졌던 바둑이 인공 지능 (Artificial Intelligence, AI)에 의해 정복당했다.  구글 딥마인드 (Google DeepMind)가 개발한 인공 지능 바둑 프로그램인 알파고 (AlphaGo)는 바둑천재 이세돌을 상대로 4승 1패의 성공적인 결과를 얻었다. 흔히 바둑에서 가능한 경우의 수는 우주의 원자 수보다 많다고 한다.  무한대에 가까운 경우의 수로 인해 바둑은 인공 지능이 인간을 능가하기가 매우 어려운 문제로 여겨졌으나, 알파고는 이를 극복하고 나아가 스타크래프트 2와 같은 더욱 고차원의 상황 판단 능력과 행동을 필요로 하는 게임으로의 도전을 이어나가고 있다.  오히려 인공지능의 급격한 발전을 통해, 인공지능이 인간의 한계를 뛰어넘는 존재가되는 기술적 특이점 까지 우려하는 시선들 또한 나타나고 있다. 1. 인공지능의 형태 최근 알파고로 대변되는 인공 지능은 종종 기계 학습 (Machine Learning)이나 인공 신경망 (Artificial Neural Network)으로 혼용되기도 한다. 사실 각 용어가 의미하는 바는 다르지만, 그만큼 서로 밀접한 관계를 맺고 있다. 흔히 일반인들이 생각하는 인공 지능이란 영화 (2001 스페이스 오디세이 의 HAL9000, 엑스 마키나 의 에이바 ,프로메테우스 의 데이빗) 나 만화 (철완 아톰, 도라에몽) 등의 각종 대중 매체에서 보여지는 모습일 것이다. 이러한 대중 매체 속에서의 인공 지능은 대부분 기계적 구조의 육체와 인공적 (Artificial) 으로 만들어진 인간과 같은 혹은 그보다 발달한 수준의 지능 (Intelligence) 을 갖는 존재들로 묘사된다. 인간 수준의 지능을 가지고 있기때문에, 인공지능은 정형화된 문제뿐 아니라 다양한 사건, 사고를 해결 할 수 있는데, 이러한 형태의 범용적인  사고 능력을 가진 인공지능을 강인공지능 (Strong AI) 이라 한다. 반면에 알파고를 필두로한 4차 산업 혁명에서의 인공지능은 특정한 문제와 목적을 갖고 그 목적 안에서 지능적인 행동을 수행하는 약인공지능 (Weak AI) 이다.  각 분야의 대표적인 인공지능 모델들은 다음과 같다.   인공지능 바둑 소프트웨어 : 알파고 (구글), 절예 (텐센트)  인공지능 비서 : 알렉사 (아마존), 시리 (애플), 코타나 (마이크로소프트)  헬스케어 및 법률 : 왓슨 (IBM)  자율주행 자동차물론 강인공지능이 이러한 약인공지능의 단순 통합으로 이뤄지진 않는다. 하지만 약인공지능 기술의 발전이 범용적 인공지능 탄생의 주춧돌이 될 것은 분명할 것이다. 2. 인공지능 첫 걸음 그렇다면 특정 목적을 수행하는 약인공지능은 어떻게 만들 수 있을까? 가장 간단한 방법은 해당 문제에 대해 잘 알고 있는 사람이  보유한 지식을 활용하여 특정 상황에서 어떻게 행동 할 것인지에 대한 규칙을 만들어 볼 수 있을 것이다. 예를 들어 버스와 승용차를 구분하는 인공지능 프로그램을 만들어야 한다고 생각해보자. 우리의 경험에 비추어 볼 때 바퀴의 크기, 차체 길이, 탑승 가능 인원 등을 버스와 승용차를 구분 할 수 있는 기준으로 설정 할 수 있을 것이다. 이와 같은 체계화 된 기준에 따른 판단 과정을 시스템적으로 구성하여 문제를 해결 하는 방법을 전문가 시스템 (Expert system)이라고 한다. 위와 같은 간단한 문제 (사실 우리에겐 간단한 문제인 것처럼 보이지만 실제로 기계에게는 어려운 문제일 수 도 있다.)에 대해서는, 수개의 규칙으로도 주어진 임무를 잘 수행 할 수 있을 것이다. 하지만 운전과 같이 더욱 복잡한 임무를 수행해야 하는 경우에는 규칙을 설정하는 것부터 매우 어려운 과정이 될 것이다. 사실 위의 문제에서 바퀴 지름, 차체 길이 등과 같은 정형화된 데이터 아닌 사진을 통해서 버스와 승용차를 구별하는 문제로 바뀌는 것 만으로도 위의 문제는 충분히 복잡한 문제가 되어버린다. (사진으로부터 바퀴의 크기, 수 등을 추론해야 하는 새로운 인공지능이 필요할 것이다.) 3. 기계 학습과 딥 러닝 그런데 사람은 상대적으로 위의 문제들을 쉽게 수행한다. 그 차이를 만들어내는 결정적인 요인 중 하나는 학습일 것이다. 누군가 직접적으로 규칙들을 입력해 주는 것이라기보다, 관찰 가능한 데이터를 바탕으로 규칙뿐만 아니라 규칙에 필요한 데이터 혹은 특징 (Feature)까지 배우고 생성하게 되는 것이다. 이러한 학습의 과정을 인공지능 개발에 적용하여, 데이터를 통해 컴퓨터가 학습 할 수 있도록 하는 알고리즘과 기술을 통틀어 기계 학습 이라 한다. 규칙이나 원리를  지정하는 것이 아닌, 데이터로부터 학습하는 것이다. 나아가 딥 러닝 (Deep learning)은 앞서 언급한 예제처럼 추론에 필요한 특징들 (사진으로 부터 필요한 정보들을 얻는 과정)까지 학습을 통해서 얻는 것을 딥러닝 이라고 말한다.  (인공신경망의 레이어가 많을때 심층 신경망 (Deep neural network)라하고 과거에는 이러한 심층 신경망을 사용한 머신 러닝을 딥러닝이라 이야기했다.)                           머신 러닝 프레임워크. 정형화된 데이터로부터 추론 능력을 학습한다.                                딥 러닝 프레임워크. 깊은 인공신경망을 통해 가공 전 데이터로부터 추론에 필요한 특성까지 학습한다.      4. 인공 신경망과 기계 학습 그렇다면 인공신경망과 기계학습의 차이는 무엇일까? 간단하게 말해서 인공신경망은 기계 학습의 다양한 알고리즘 중 하나이다. 앞서 기계 학습이란 데이터를 통해 기계가 학습하는 프레임워크라고 이야기했다. 이를 인간의 학습과정에 비추어보았을 때 눈, 귀, 코 등의 감각기관을 통해 데이터가 들어오면 그 데이터를 통해 학습을 수행하는 주체는 인간의 뇌라고 볼 수 있다. 따라서 기계 학습에서의 인간의 뇌에 해당하는 존재를 인공신경망으로 이해하면 편할 것이다.                           뇌신경 구조도 (출처 : 위키피디아)      실제로 인공신경망 은 뇌신경의 동작을 수학적으로 모사한 인공 신경들로 구성된 네트워크로 일종의 전자두뇌 역할을 하고 있으며, 최종적으로는 인공 신경 네트워크와 그 학습을 다룬 기계학습 알고리즘이다. 인공신경망은 최근들어 인공지능과 함께 주목받은 것처럼 보이지만 실제로는 꽤 오래전부터 연구되어왔던 분야이다. 1950년대 부터 실질적인 인공신경망의 개념이 등장하고, 흥망의 과정을 거쳤다. 최근의 인공지능 붐은 2006년에 인공신경망을 깊게 구성하여 좀 더 고차원적인 특징을 판단할 수 있는 심층 신경망 (Deep Neural Network)의 효율적인 학습 방법이 개발되면서 이루어진것으로 보아도 과언이 아니다. 컴퓨터 비젼에 사용되는 CNN (Convolutional Neural Network), 음성인식에 사용되는 RNN (Recurrent Neural Network) 등도 모두 인공신경망에 속하며 인공신경망에 대한 기초적인 내용에 대해서는 차후에 살펴볼 것이다. 지금까지 인공 지능, 기계 학습, 인공 신경망의 의미와 차이점에 대해 간단하게 살펴보았다. 앞으로의 이야기하고자 하는 내용은 기계 학습에서 사용하는 실질적인 코드나 알고리즘, 수학에 관한 내용이 아니다. 기계 학습의 프레임워크를 반대로 사람에게 적용하여 기계 학습에 대한 직관적인 이해 (특히 인공신경망에 기반하여)와 함께 효율적인 공부 방법에 대한 이야기가 될 것이다. ","categories": ["Machine Learning"],
        "tags": ["머신러닝","기계학습"],
        "url": "http://localhost:4000/machine%20learning/machine-learnig-1/",
        "teaser":null},{
        "title": "[Jekyll] 깃허브 페이지를 통한 블로그 생성 첫걸음 (Minimal Mistakes theme 기반)",
        "excerpt":"Minimal Mistakes theme 기반 깃허브 페이지 블로그 개설하기 0. 개설하기 전에… 개인적으로 블로그를 하나 운영하고 싶어서 네이버 블로그, 티스토리, 카카오 페이지 등등 유명 플랫폼들을 살펴봤는데, 티스토리는 초대장 받기가 힘드네요. 가능하면 마크다운 (Markdown) 기반으로 수식도 추가해가면서 깔끔하게 포스팅 하고싶었는데,  카카오 같은 경우는 마크다운 방식으로 돌아가긴 하지만 수식 넣는것도 힘든 것 같고 작가 등록이 필요합니다. 대체할만한 것을 찾기위해  웹서핑을 해본 결과, 깃허브(GitHub)와 지킬 (Jekyll)을 활용해서 쉽게 블로그 생성이 가능하다는 소식을 듣고 블로그를 한번 만들어 보았습니다. 생각보다 쉽게 만들지는 못했던 것 같아서, 블로그 생성 및 구성 과정에 대해 쉬운 것부터 하나하나 포스팅 해 가려고 합니다. 1. 마크다운 (Markdown)이란? 마크다운은 문서 양식을 편집하는 문법이라고 합니다. 그래서 글쓸때 한글처럼 블록 지정해서 글자 크기, 글자 색, 문단 등을 설정하는게 아니라, 정해진 코드와 함께 글을 쓰면 그에 해당하는 양식으로 자동적으로 변환됩니다. 그래서 문서 양식 설정하는데 크게 집중하지 않아도 깔끔하게 글을 쓸 수 있습니다.  간단한 마크다운 문법의 예는 다음과 같습니다.             문법 예시      실행 결과                  # 제목      #제목              * 기울기 *      기울기              ** 강조 **      강조              ` 코드 작성 `      코드 작성      2. 지킬 (Jekyll)이란? 지킬은 정적 사이트 생성기라고 하는데, 사실 이쪽 분야의 일을 하지 않아서 정확하게 어떻게 동작하는 건지는 잘 모릅니다. 대충 블로그를 한번 만들어보니,  마크다운 문법을 통해 확장자가  (.md)인 포스트를 작성하면, 포스트 맨 앞부분에 위치한 YAML 헤더에 따라서  html 파일들이 생성되고 블로그를 자동적으로 구성해주는 프로그램인 것 같네요. 덕분에 마크다운으로 글만 잘 작성하면 쉽고 깔끔하게 포스팅이 되는 것 같습니다. 3. 깃허브 (Github)란?? 전문 개발자는 아니지만 대학원에 다니면서 깃허브의 존재는 어렴풋이나마 알고있었는데, 실제로 활용을 할 기회가 별로 없었습니다. 어떤 프로젝트를 위한 코드나 문서를 작성하다보면 이것저것 수정을 하게되는데  수정할때마다 생성되는 다양한 버전의 파일들을 관리하는게 꽤나 번거로운 일입니다. 깃(Git) 이러한 문제를 해결하기위한 분산 버전 관리 툴인데, 깃허브(GitHub)는 깃(Git)을 사용하는 프로젝트들을 웹에 저장하는 웹 호스팅 서비스라고합니다. 그런데 깃허브에서는 깃허브 페이지 (GitHub Pages) 서비스를 통해서 지킬 기반의 개인 사이트를 무료로 지원합니다. (일인단 한개 사이트) 결국 지킬이라는 사이트 생성기를 통해 만든 개인 블로그를 깃허브를 통해서 호스팅하여 블로그를 운영하는 것입니다. 4. 블로그 생성하기 블로그를 생성하기 위해서 가장 먼저해야 하는 일은 깃허브에 가입하는 것입니다. 가입이 완료되면 지킬 테마 모음 사이트에 가셔서 맘에드는 테마를 고르시면 됩니다. 지금 이 블로그는 Minimal Mistakes 테마를  기준으로 작성되었는데, 테마 선택 페이지에 들어가서 홈 페이지로 들어가시면 해당 테마의 깃허브 저장소가 뜹니다.                           깃허브 테마 소개 페이지      해당 테마 깃허브 페이지 위 쪽을 잘 살펴보면, 포크 (Fork) 버튼이 있는데, 깃허브 로그인 한 상태에서 포크를 누르면 해당 테마의 파일들을 나의 깃허브 저장소로 복사를 하게됩니다. 이제 해당 테마를 포크한 나의 깃허브 저장소 (repository)로 이동합니다.들어가보면 화면 상단에 설정 (Setting) 탭이 있는데, 이걸 클릭해서 들어가보면 이제 최상단에 Repository name 설정하는 부분이 나옵니다.                           깃허브 저장소의 설정 탭을 클릭한다.      원래대로라면 포크된 저장소 이름이 아래의 스크린샷처럼 테마 이름과 같게 되어있습니다.                           깃허브 페이지를 통해 블로그를 생성하기 위해서 repository 이름 변경은 필수적이다.      깃허브 페이지 서비스를 이용하기 위해서는 이제 해당 저장소의 이름을 다음과 같이 변경해주시면 됩니다. 깃 허브 계정.github.io Rename을 눌러서 설정 변경하고 정상적으로 진행되는 경우 설정 페이지 아래쪽으로 스크롤을 내려보시면 Github pages가 활성화 되었다고 초록색으로 뜹니다.                           깃허브 페이지 활성화      정상적으로 진행이 되었으면, 해당 주소 (깃허브 계정.github.io)로 접속을 하게되면 해당 테마 페이지의 기본 설정으로 블로그 개설이 됩니다. 해당 블로그의 기본적인 설정은 _config.yml 파일에서 정의가 되는데  제가 사용하는 Minimal Mistakes 테마에서는 다음과 같이 기본적인 정보를 설정하게 됩니다. 깃허브에서 _config.yml 파일을 열어서 블로그 세팅에 필요한 다음의 내용들을 개인 정보에 맞게 편집 후 저장합니다. # Site Settingslocale                   : \"ko\"title                    : \"제목\"title_separator          : \"-\"name                     : \"이름\"description              : \"블로그 설명\"url                      : https:// 깃허브 계정.github.io# the base hostname &amp; protocol for your site e.g.\"https://mmistakes.github.io\"baseurl                  : # the subpath of your site, e.g. \"/blog\"repository               : 깃허브 계정/깃허브 계정.github.io# GitHub username/repo-name e.g. \"mmistakes/minimal-mistakes\"~~~~~~~~~~~~~~~~~~# Site Authorauthor:  name             : \"내 이름\"  avatar           : # path of avatar image, e.g. \"/assets/images/bio-photo.jpg\"  bio              : \"안녕하세요.\"  location         : \"Somewhere\"잠시 후에 다시 본인의 깃허브 블로그 주소 (깃허브 계정.github.io)로 접속을 하면 수정 내용이 반영된 아래의 결과가 나오게됩니다.                           블로그 생성 결과      5. 요약 지금까지 깃허브와 지킬을 이용해서 제일 기본적인 형태의 블로그를 구성하는 과정에 대해 살펴보았습니다. 결과적으로 블로그를 생성하는 과정은 크게 다음의 3가지 단계를 거치면됩니다.   깃허브 (GitHub) 가입하기  원하는 블로그 테마 포크하기  저장소 (Repository) 이름 변경 및 _conf.yml 파일 수정하기P.S. 추가적으로 깃허브 저장소에서 직접적으로 코드를 수정하지 않고 개인 컴퓨터로 블로그 구성 변경 등 이것저것 테스트를 하고싶다면 다음의 과정을 거쳐 블로그를 로컬하게 돌려보면됩니다.   루비 (Ruby)를 설치한다.  지킬 (Jekyll)을 설치한다.  깃허브 블로그 폴더를 복사한다.  복사본에서 이것저것 수정.  해당 폴더에서 지킬을 실행, 로컬호스트로 접속 후 수정 결과 확인.  수정 결과 반영하고 싶다면 Git을 통해 업로드.","categories": ["Jekyll"],
        "tags": ["지킬","깃허브","블로그"],
        "url": "http://localhost:4000/jekyll/how-to-make-blog-with-jekyll/",
        "teaser":null},{
        "title": "[Jekyll] 윈도우에서 지킬 설치 및 블로그 생성하기",
        "excerpt":"지킬 기반 블로그를 운영하면서 블로그 구성 변경이나 기능 추가를 할 때, 깃허브 상에서 바로 수정하지 않고 로컬머신에서 먼저 적용해보고 미리보기를 수행 할 수 있다. 리눅스나 맥에서는 지킬을 통한 블로그 생성을 상대적으로 쉽게 할 수 있다고 한다. 윈도우 상에서 이를 수행기위해서는 일련의 루비와 지킬 설치 과정을 거쳐야 한다. 1. 루비 (Ruby) 설치 루비 인스톨러 for windows의 다운로드 페이지에서 윈도우용 루비 + 개발자킷(DevKit) 설치 프로그램을 다운로드  후 설치한다. 루비가 먼저 설치되고 (PATH 설정 포함) 이어서 개발자 킷 설치 과정이 이루어진다.                           루비 인스톨러 홈페이지에서 Ruby+Devkit 2.4.4-1을 다운로드한다.      2. 지킬 (Jekyll) 설치하기 루비가 설치가 정상적으로 완료되면, 이제 지킬을 설치해야한다. 먼저 윈도우 검색창에서 Ruby를 검색 후 Start Command Prompt with Ruby를 실행한다.                           윈도우 검색창에서 Ruby 검색 후 루비 콘솔을 실행한다.      콘솔창에서 gem 명령어를 통해 지킬과 실행에 필요한 패키지들을 설치한다. gem install jekyllgem install minimagem install bundlergem install jekyll-feedgem install tzinfo-data관련 패키지들이 정상적으로 설치되면, 이제 로컬 머신에서 지킬을 통해 블로그 미리보기를 할 수 있다. 3. 로컬에서 블로그 생성하기 먼저 루비 콘솔창에서 이전 포스팅에서 생성한 블로그의 깃허브 저장소와 연동된 폴더로 이동한다. 윈도우 상에서는 인코딩 문제가 있을 수 있는데, 다음의 코드로 블로그 생성이 가능하다. # 블로그 저장 폴더로 이동한다.# 인코딩 에러 발생시 다음의 코드를 실행한다.chcp 65001# 지킬을 실행한다.jekyll serve코드 실행 결과는 다음과 같다.                           블로그 저장 폴더 내에서 명령어 수행 결과      브라우저를 열어 http://127.0.0.1:4000/로 접속하면 로컬 상에서 블로그가 구현된 결과를 살펴 볼 수 있다. 4. 요약 깃허브에 블로그 수정 내용을 반영하기 전에 로컬 머신 상에서 미리 돌려볼 수 있다. 그리고 정상적으로 동작하는 경우에 git을 통해 변경 내용을 업로드하면 웹상에서도 바로 수정사항을 반영 할 수 있다. 일반적인 과정은 다음으로 요약 할 수 있다.   루비 (Ruby)를 설치한다.  지킬 (Jekyll)을 설치한다.  깃허브 블로그 폴더를 복사.  해당 폴더에서 수정 진행.  해당 폴더에서 지킬을 실행, 로컬호스트로 접속 후 수정 결과 확인.  수정 결과 반영하고 싶다면 Git을 통해 업로드.설치에 대한 조금 더 자세한 내용은 지킬 한국어 페이지를 참고한다. ","categories": ["Jekyll"],
        "tags": ["지킬","깃허브","블로그"],
        "url": "http://localhost:4000/jekyll/jekyll-on-windows/",
        "teaser":null},{
        "title": "[기계의 학습법] 학습과 기계 학습의 관계",
        "excerpt":"이번 장에서는 기계 학습을 조금 더 파헤쳐본다. 사실 기계 학습이라는 단어를 처음 접했을 때는 마치 “사람이 어떤 기계에 대해서 학습하는 것”을 의미하는 것처럼 보인다. 그러나 실제로는 이와 정반대로 “기계가 학습하는 것”을 의미한다. 아마 원래 영문 용어인 Machine Learning을 직역하는 과정에서 생기는 차이인 것 같다. 단어 자체에서 알 수 있듯이 결국 중요한 포인트는 기계 (Machine)와 학습(Learning)이다. 따라서 그 둘 사이의 관계를 이해하는 것이 무엇보다도 중요한데,  이는 학습의 주체 (누가), 목표 (무엇을), 원천 (어디서)을 아는 것에서 시작한다. 먼저 기계 학습에서 학습의 주체는 명확하다.  바로 기계 혹은 컴퓨터이다. 그렇다면 기계는 무엇을 배우는가? 앞 장에서 기계 학습이 인공 지능 개발의 일부분인 것을 상기해보면, 기계가 배우고자 하는 그것은 바로 인간의 지능, 문제 해결 능력이라고 말할 수 있다. 물론 모든 문제에 대해 해결 할 수 있는 능력이면 좋겠지만 아직까지는 일반화된 문제 해결 능력보다는 특정 문제에 초점을 두고 있다. 마지막으로 배움의 원천 (source),  어디서 혹은 무엇을 통해 배우는 지를 알아야한다. 흔히 우리는 세상을 통해서 배운다고 한다. 그리고 사람은 눈, 귀, 코 등의 감각 기관을 통해 세상을 인지한다. 기계는 센서를 통해 들어오는 신호로 세상을 인지하고, 결국 그 신호란 데이터를 의미한다. 따라서 기계 학습은 “데이터를 통해서 기계가 문제 해결 능력을 배우는 것”이 된다. 1. 학습의 정의 한편 인간에게 있어서 학습 (Learning)이란 무엇일까? 교육학 용어 사전에 나온 학습에 대한 정의를  참고해보면, 학습의 뜻은 다음과 같다.   학습이란 연습이나 경험의 결과 일어나는 행동의 지속적인 변화를 의미하고 다음의 내용을 수반한다.  학습이란   1) 행동의 변화이고,   2) 그 변화는 연습, 훈련, 경험에 의한 것에 한하며,   3) 그 변화는 비교적 영속적이어야한다.   ​\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t- 교육학 용어사전, 1995, 하우동설 2. 인간의 학습과 기계의 학습 그렇다면 추상적으로 보여지는 학습의 정의와 기계 학습은 어떻게 연결되는 것일까? 앞서 기계 학습이란 “데이터를 통해서 기계가 문제 해결 능력을 배우는 것”으로 정의했다. 수학적으로 보았을 때, 기계의 문제 해결 능력이란 어떠한 상황이나 그에 대한 정보 $x$가 입력되면 이에 대한 결과 혹은 답으로서 를 출력하는 하나의 함수 $y=f(x)$라고 이야기 할 수 있다. 결국 기계의 문제 해결 결과로서의 $y$라는 답은 학습의 정의에서 이야기하는 행동과 일맥상통한다. 또한  $y$는 $f(x)$에 의해 정의되기때문에 행동의 변화는 결국 $f(x)$의 변화를 의미한다. $f(x)$의 변화에 대해서 간단한 1차 함수 $f(x)=ax+b$를 예를 들어 생각해보자. 아래는 $(a,b)$가 각각 $(1,1), (2,1), (1/2,0)$인 경우의 $f(x)$ 그래프로 서로 다른 형태를 갖는 것을 볼 수 있다.                           서로 다른 파라미터를 가진 세가지 함수 그래프.      $f(x)$의 변화는 $(a,b)$가 다르기 때문이다. 그래프의 형태는 $(a,b)$ 값에 의해 결정되고, 이와 같이 그래프의 형태를 결정하는 값, 파라미터들을 $w$라 하면, 함수 $f(x)$의 표기를 파라미터까지 포함하여 $f(x;w)$ 꼴로 나타낼 수 있고 최종적으로   행동의 변화란 함수 $f(x;w)$에서 $w$의 변화를 의미한다.두번째로 이러한 행동의 변화 (즉, $w$의 변화)는 연습, 훈련, 경험에 의한 것에 한하고, 성숙에 의한 변화는 학습으로 간주되지않는다는 것은 무엇을 의미할까? 먼저, 성숙에 의한 변화는 기계가 생물이 아니기때문에 논외로 쳐도 무방 할 것이다. 중요한 것은 연습, 훈련, 경험에 의한 변화라는 것이고, 훈련(연습)과 경험을 나누어 이야기하고자 한다. 먼저 기계학습에서의 경험이란 $w$를 찾는 과정에서 필요한 데이터 $D$를 말한다. 경험 속에서 우리는 어떠한 행동이 정답인지 판단 할 수 있고,  학습은 결국 그 판단을 바탕으로 올바른 $w$를 찾아가는 과정이다. 그러므로 $w$는 주어진 데이터 혹은 경험 $D$에 의해 결정되며 최종적으로 $f(x;w)$는 $f(x;w \\mid D)$로 나타낼 수 있다. 다음으로 훈련(연습)이란 $w$를 변화하는 과정과 같다고 본다. 어떤 문제와 그에 관한 경험 혹은 데이터 $D$가 주어지면, 그에 대한 행동은 $f(x;w \\mid D)$를 통해 이루어진다. 이 때 주어진 경험 $D$에서는 $w=1$일때 $f(x;w=1 \\mid D)$의 결과 (행동)가 옳다면, 기계는 임의의 $w$값에서 훈련을 통해 $w=1$이라는 것을 배워야 한다. 따라서 $D$ 에 기반한 판단을 통해 올바른 $w$를 찾아가는 과정이 기계 학습에서의 훈련이고, 특히 인공 신경망에서는 이러한 훈련이 오류 역전파 (Backpropagation) 알고리즘을 통해 이루어진다.  (오류 역전파에 대한 이야기는 차후에 인공신경망과 함께 살펴볼 것이다.)   $w$의 변화는 주어진 경험 $D$와 이를 바탕으로 한 훈련 (오류 역전파 알고리즘)을 통해 이루어진다.마지막으로 변화는 비교적 영속적이어야 한다는 것은 훈련이 아닌, 시간이 지남에 따라서 자동적으로 $w$가 변화하지 않는 다는 것인데, 이는 학습의 주체가 기계이기때문에 메모리에 저장되는 한 학습의 결과로 얻은 $w$ 는 영속적으로 유지될 것이다. 정리해보면 기계 학습이란 데이터 $D$를 통해서 기계가  $f(x;w \\mid D)$를 배우는 것이고, 그 과정에서 주어진 데이터 $D$로부터  어떻게 올바른 $w$를 학습하는지가 중요하다. 사람이 공부하는 것도 이와 동일하게 개개인이 겪는 경험 (혹은 문제들), 그리고 그 경험을 통한 올바른 방향으로의 행동 변화 과정이 중요한 것이다. *(실제로는 배우는 것 뿐만 아니라 배운 것을 수행하는 부분도 포함된다. 1959년 아서 사무엘은 기계 학습에 대해서 “기계가 일일이 코드로 명시하지 않은 동작을 데이터로부터 학습하여 실행할 수 있도록 하는 알고리즘을 개발하는 연구 분야”라고 정의했다. ) ","categories": ["Machine Learning"],
        "tags": ["머신러닝","기계학습"],
        "url": "http://localhost:4000/machine%20learning/machine-learnig-2/",
        "teaser":null},{
        "title": "[Itemz] 다이슨 무선청소기 구매를 위한 가이드",
        "excerpt":"기존에 플러스마이너스제로 무선청소기와 일렉트로룩스 유선청소기 두 대로 사용하고있었다. 하지만 무선청소기의 경우 다양한 툴의 부재, 그리고 유선청소기의 경우 접근성이 떨어진다는 단점들이 있어서 새식구가 생기는 김에 유명한 다이슨 무선청소기를 사기로했다. 다이슨의 경우 한 모델임에도 불구하고 다양한 패키지들로 구성, 판매하고있어서 무엇을 사야 할지 고민이 많이 된다. 이번 포스트는 구매하기 전에 얻은 정보들을 정리해보았다. 다이슨 구매하시려는 분에게 도움이 되었으면 한다. 1. 다이슨 V10 특징 다이슨 한국 공식 홈페이지 를 바탕으로 다이슨 V10의 주요 장점들을 정리해 보았다.   업그레이드 된 V10 모터  최대 60분간의 사용 가능 시간  헤파(HEPA) 필터를 통한 미세먼지 제거  일직선 배치로 V8보다 강해진 흡입력  편해진 먼지통 비우기  3단계 파워모드특히 기존 V8보다 20분이나 늘어난 사용시간을 주요 장점으로 이야기하고 있는데, 이부분에 대해서는 추후에 짚고 넘어가자. 인터넷 후기들을 살펴보면, 다른 사항들보다 먼지통 구조가 바뀐것을 큰 장점으로 꼽는 듯하다. 2. V10 패키지별 비교 V10은 현재 다양한 패키지로 판매가 되고있는데, 각 패키지 별 차이점은 다음과 같다. (가격: 다나와 최저가 기준)       패키지    플러피    애니멀    앱솔루트플러스    앱솔루트엑스트라        가격    75만원대    74만원대    87만원대    85만원대        헤드    소프트 롤러 클리너    다이렉트 드라이브    소프트 롤러 클리너,다이렉트 드라이브        툴 (공통)    미니 모터 툴, 콤비네이션 툴, 크레비스 툴        툴 (추가)    소프트 더스팅 브러쉬    소프트 더스팅 브러쉬    소프트 더스팅 브러쉬,플렉서블 크레비스 툴,연장 호스    매트리스 툴,업탑 어댑터,연장 호스,하드 플로어 툴        요약    1헤드 4툴    1헤드 4툴    2헤드 6툴    2헤드 7툴  국내 정식 판매 중인 V10 패키지는 플러피, 애니멀, 앱솔루트 플러스, 앱솔루트 엑스트라로 각각 헤드와 툴 구성이 상이하다. 사용 목적에 맞는 툴로 구성된 패키지로 구매하면 될 것 같다. 앱솔루트 엑스트라의 경우 툴의 종류가 7개로 가장 많지만 소프트 더스팅 브러쉬와 플렉서블 크레비스 툴이 빠져있다. 가격적인 비교에서도 앱솔루트 플러스에 비해 2만원정도 싼 것을 보면 위 두 가지 툴에대한 선호도가 엑스트라에서 추가되는 매트리스툴, 업탑 어댑터, 하드플로어 툴에비해 선호도가 높은 것 같다. 가성비 측면에서는 V10 플러피, 다양한 툴을 사용하고싶다면 V10 앱솔루트 플러스를 구매하는 것이 좋을 것 같다. 3. V8과 V10 비교 V8보다 업그레이드 된 V8 카본파이버 모델에 비해 가격차 대비 신형 V10모델이 갖는 장점이 클까?  V8 카본파이버 모델과 신형 V10 모델 사양을 비교하면 다음과 같다.       모델명    V8 카본파이버    V10 앱솔루트 플러스        가격    66만원대    87만원대        무게    2.63kg    2.5kg        사용시간    40분    60분        충전시간    5시간    3시간 30분        흡입력(최대)    155AW    151AW        단계 조절    2단계    3단계        소비전력    485W    525W        먼지통    0.54L        헤드    소프트 롤러 클리너, 다이렉트 드라이브        툴 (공통)    미니 모터 툴, 콤비네이션 툴, 크레비스 툴, 소프트 더스팅 브러쉬, 플렉서블 크레비스 툴, 연장 호스        툴 (추가)    업탑 어댑터, 매트리스 툴    -  가격 차이가 20만원 가까이 나는데 비해 V10이 갖는 정량적인 장점은 무게, 사용 시간, 충전 시간, 단계 조절 뿐인 듯하다. 반면에 V8 카본파이버 모델은 최대 흡입력이 4AW 높으며, (사용빈도가 높을 것 같지는 않지만) 업탑 어댑터와 매트리스 툴이  추가로 구성된다. 사실 무선 청소기에서 사용시간은 굉장히 중요한 포인트이고 20분이나 증가한 사용시간은 큰 메리트지만, 실제 사용시간을 따져봤을 때 V8 카본파이버 모델이 더 좋은 선택이 될 수 있다. 4. 사용 시간 비교 V10 모델 사용시간이 60분으로 증가했으나 굳이 실질적인 차이는 없다는 이야기도 있다 (관련글 링크).모터 헤드 제외시 단계별 출력과 사용시간은 다음 표와 같다.       모델명    V8 카본파이버    V10 앱솔루트 플러스        1단    -    16AW / 60분        2단    28AW / 40분    33AW / 30분        3단    155AW / 7분    151AW / 5분  이에 따라 V10에서 60분으로 늘어나 사용 시간은 1단계 출력이 낮아지면서 늘어난 것처럼 보인다. V8과 비교하기 적합한 V10의 출력은 2,3단으로 오히려 사용시간은 큰 차이가 없을 수 있다. 그러므로 청소시 V10 1단 출력만으로도 충분하다면 늘어난 사용시간의 이점을 누릴 수 있을 것이다. 5. 정리   적당한 가격에 V10의 장점 (디자인, 쉬운 먼지통 처리)을 누리고 싶다면 V10 플러피  V10을 사용하면서 다양한 툴을 사용하고 싶다면 V10 앱솔루트 플러스 or 엑스트라  싼가격에 다양한 툴을 사용하고싶다면 V8 카본파이버  더 큰 먼지통이 필요하다면 V10 앱솔루트 (해외 직구)","categories": ["Item"],
        "tags": ["아이템","육아","전자제품"],
        "url": "http://localhost:4000/item/dyson-comparison/",
        "teaser":null},{
        "title": "[Latex] 공대생을 위한 Latex 팁",
        "excerpt":"학창 시절 글쓰는 것보다는 수학/과학이 편해서 전자공학과에 진학하고 또 대학원생까지 하고있지만, 공대생에게 있어서 글쓰기 능력은 생각보다 중요하다. 물론 가장 우선시 되어야 하는 것은 좋은 연구 아이템과 연구 결과이다. 하지만 그 좋은 내용을 잘 표현하는 것은 또 다른 문제다. 본인의 연구 결과는 저널 논문이나 컨퍼런스 발표를 통해 커뮤니티에 전달되기때문에, 연구 역량뿐만 아니라 글쓰기 능력도 뒷받침이 되어야 한다는 것이다. 공대 생활을 하면서 많은 학생들이 한글이나 워드를 통해서 실험 보고서, 레포트 등의 다양한 글을 작성해봤을 것이다. 그러나 대학원생이 되면서 논문을 작성하게 되면, 우리는 latex라는 새로운 툴을 통해서 글을 쓰게 된다. 우리는 한글이나 워드와 같은 편집하는대로 화면에 표시되는  WYSIWYG 방식에 익숙하다. 하지만 latex는 이와다르게 마치 프로그래밍 코드를 작성하듯이 글을 작성하면, 컴파일 과정을 거쳐 양식에 맞는 최종 결과물을 얻는 방식이다. 글쓰기 능력을 키우는데 도움이되는 책들은 시중에 많이 나와있다. 본 포스트에서는 글쓰기 능력보다 latex를 처음 는 대학원생들에게 필요한 기초적인 가이드와 팁들을 정리해보았다.  (사실 구글 검색을 통해 쉽게 알 수 있는 정보들이다. 구글 검색을 생활화하자.) 0. 저널과 컨퍼런스의 차이 처음 대학원에 입학했을때 연구실 선배들이 ”~~ 저널에 냈다.”, ”~~ 컨퍼런스에 내서 발표하러간다.” 는 이야기를 했는데, 논문 투고 전까지는 그 차이를 잘 이해하지 못했다. 먼저 컨퍼런스(=학회)는 진행 중인 연구나 진행 완료된 연구를 학계에 공유하기위해 만들어진 자리로, 저널 논문에 비해 요약된 버전 (보통 페이지 수가 저널에 비해 적다)으로 작성해서 제출한다. 억셉(accept)이 되면 컨퍼런스가 열리는 장소에서 사람들 앞에서 구두 발표나 포스터 발표를 하게된다. 또한 억셉된 논문들을 묶어서 proceedings of 컨퍼런스에 실리게 된다. 저널(=학회지)은 컨퍼런스보다 공신력이 있는 출판물로서 잡지처럼 월간, 계간 등 일정주기로 출판된다. 저널에 제출하는 논문은 완성된 연구여야 한다. 대학원생의 목표는 좋은 논문을 써서 좋은 저널에 게재 하는 것이고, 보통 좋은 저널이란 1) SCI(E) 급 저널 , 2) Impact Factor (IF)가 높은 저널이다. SCI(E)급 저널이란 Science Citation Index 혹은 Science Citatation Index Extended에 등재된 저널을 말한다. IF는 저널의 영향력을 수치화시킨 값으로 연구 분야에 따라서 IF가 달라질 수 있다. 1. 제출하려는 저널이나 컨퍼런스 관련 정보를 잘 확인하자. 논문을 작성하기로 했다면, 어느 저널 혹은 컨퍼런스에 제출할 것인지 정해야한다. 해당 저널 혹은 컨퍼런스의 홈페이지를 필히 살펴봐야한다. 연구 주제, 논문 양식, 저자 주의사항 등 논문 작성에 필요한 사항들이 기재되어있다. 이러한 사항들을 필히 정독하고 확인 후 작업해야 불필요한 추가 작업들을 회피 할 수있다. 2. 논문 작성은 Latex로 진행 국내 학회의 경우 제출 논문을 위한 한글이나 워드 양식이 있어서 쉽게 작성 할 수 있다. 하지만 해외 학회 또는 저널에 체출하기 위해서는 latex를 잘 사용할 줄 알아야한다. (학과 혹은 연구 분야 별로 다를 수 있는데, 전자공학과 IEEE 저널 같은 경우 보통 latex를 사용한다.) 다양한 latex 에디터가 있는데, 개인적으로 오프라인 에디터는 TeXstudio, 온라인 에디터는 sharelatex를 추천한다. 특히 작성 환경이 자주 바뀌는 사람들 (ex. 연구실이나 카페를 오가며 작성하는 경우)이나 논문 공동 수정이 쉬워야 하는 경우에는 온라인 에디터를 추천한다. 대표적인 온라인 에디터로 sharelatex이나 overleaf가 있고, 버전 관리 등을 함께 지원한다. 오프라인 에디터는 TeXstudio, texworks,texmaker 등이 있는데, 드랍박스를 같이 활용해서 동기화시키는 것도 좋다. 설치에 관한 내용은 인터넷 검색을 참고한다. 3. 논문 작성 순서 논문 작성 환경이 구성되면, 해당 홈페이지에서 논문 tex 양식 파일을 다운로드한다. 테스트를 위해 한번 tex 파일을 컴파일 해보면 pdf로 변환된 논문을 확인 해 볼 수 있다.                           IEEE transaction tex 파일과 컴파일 결과      연구를 하면서 굉장히 많은 논문들을 읽어보게 된다. 기본적인 논문 구성은 요약, 인트로덕션, 이론적인 내용, 연구에서 제안된 내용, 실험 결과, 결론의 형태이다. 개인적으로 인트로덕션 작성하는게 가장 어렵다고 생각한다. 인트로덕션에는 기존 연구에 대한 분석과 논문에서 이야기하고자 하는 연구의 컨트리뷰션을 이야기해야한다. 컨트리뷰션은 결국 기존 연구와는 다른 차별성이기 때문에, 기존 연구 논문들에 대한 조사를 매우 잘 해야한다. 물론 연구를 시작 할 때 이미 기존 연구에 대한 분석을 끝내고 시작을 하겠지만 컨트리뷰션을 이야기위해  다시 한번 정리하는 과정이 꼭 필요하다. 따라서 본 연구의 컨트리뷰션을 염두에 두고 논문의 나머지 메인 파트 (방법론, 프레임워크, 시뮬레이션 결과)를 작성해야한다. 이 부분들은 사실을 적는 과정이기 때문에 상대적으로 쉽게 쓸 수 있기때문에 먼저 작성하고, 인트로덕션은 마지막에 작성하는 것을 추천한다. 4. 논문에 사용되는 그림 논문 작성시에 삽입되는 그림의 포맷이나 해상도가 매우 중요하다.  저널에서 특정 파일 형식으로 지정해두기도 하고, 고해상도 그림을 사용하지 않았다가 인쇄시에 뭉개지는 경우도 발생한다. 그래서 논문 그림에는 해상도와 큰 상관없는 벡터 방식의 그림파일이 좋다. 대체로 논문에 삽입되는 그림은 대게 두가지다.   프레임워크나 구조를 나타내는 그림  실험 결과 (변수, 오차 등 )에 대한 그래프프레워크나 구조를 나타내는 그림의 경우 PPT로 작성한다. PPT 슬라이드 쇼 크기와 폰트 사이즈를 각 저널에서 제시하는 사이즈로 세팅해 놓고 그림을 그린다. 이후 emf 파일로 저장 한 후, emf to eps converter를 사용해서 eps로 변환해서 논문에 삽입한다.아니면 바로 pdf로 저장해서 삽입해도 되는데, font embedding 이슈가 발생 할 수 있다. 실험 결과 그래프는 매트랩을 사용해서 eps로 바로 저장한다. 매트랩 그래프 작성은 꼭 코드화시켜서 사용해야 한다. 논문 작성시 코멘트나 재실험때문에 결과 그래프를 자주 다시 그리게 되는데, 일일이 매트랩 피겨 화면에서 편집하는 것은 매우 비효율적이기 때문이다. 코드화하면서 공통적으로 그림 크기나 폰트 사이즈를 지정하는 코드를 작성해두면 추후 활용하기에도 용이하다. 벡터 형식의 그림파일 중 PDF 파일의 경우, font embedding 이슈가 빈번하게 발생하는데, 어도비 어크로뱃을 통해 폰트와 함께 저장하는 방식으로 해결 할 수 있다. 부득이하게 픽셀 방식의 그림파일을 사용하는 경우에는 저널에서 요구하는 파일 포맷 및 해상도, dpi 등을 꼭 확인해야한다. IEEE 저널의 경우 논문 작성 후에 그래픽스 분석 툴에서 꼭 삽입한 그림파일이 제출 가능한지 여부를 확인해본다. 분석 툴을 통해 폰트 임베딩 문제 등을 확인 할 수 있다. ","categories": ["latex"],
        "tags": ["Latex","공대","논문"],
        "url": "http://localhost:4000/latex/latex-guide-1/",
        "teaser":null},{
        "title": "[PS4] 건즈, 고어 & 카놀리 2",
        "excerpt":"8월 9일에 출시한 신작 게임 건즈 고어 앤 카놀리 2 입니다. 원래 1편이 있다고 했으나, 1편은 못해보고 바로 2편으로 넘어갔습니다. 멀티플레이 가능한 2차 세계대전 배경의 좀비 슈팅 게임인데요, 재미있게 즐기긴했는데, 플레이 타임이 조금 짧은 것 같기도..?? (보통 난이도 기준 4시간정도?) 메탈슬러그 느낌이 나서 친구들끼리 멀티하면 더 재밌을것 같습니다. 좀비 러쉬 같은 추가 모드도 있었으면 더 좋았을것 같네요. 참고로 현재 인트라게임즈에서 플래티넘 트로피 이벤트도 진행중입니다~. ","categories": ["Game"],
        "tags": ["PS4","게임","플스4"],
        "url": "http://localhost:4000/game/gunsgorecannolli/",
        "teaser":null},{
        "title": "[논문 정리] Load curve data cleansing and imputation",
        "excerpt":"Load curve data cleansing and imputation via sparsity and low rank 2013 / IEEE TSG / Gonzalo Mateos, Georgios B. Giannakis 1. Introduction Load curve data는 스마트 미터에서 주기적으로 수집되는 전력 사용량 데이터를 의미.또한 정확한 load curve는 스마트 그리드 시스템 운영과 예측 등에서 매우 중요한 역할을 수행.하지만 다음의 세가지 이유로 인해 부정확한 load curve data가 발생할 수 있음.   PMU-instrumented buses are few  SCADA data become available at a considerably smaller time scale than PMU data  Regional operators are not willing to share all their variables.이외에도 outlier와 같은 bad data들의 존재 (e.g., meter failures, strikes, unscheduled generator shutdowns, extreme weather condition, malicious cyber attack)는 load curve data 활용에 걸림돌이 됨. 따라서 missing data imputation과 robust load curve estimation이 필수적.본 논문에서는 principal components pursuit (PCP)를 통해 spatial correlation, outlier sparsity를 고려한 load curve estimation을 수행. 특히 distributed PCP (DPCP)를 제안하여, 각 스마트미터에서 분산하여 estimation 수행.   요약하면 인접한 스마트미터끼리 메세지를 주고 받으면서, DPCP를 통해 cleansed load curve의 estimation을 수행.2. Modeling and problem statement 2.A. Spatiotemporal load curve data model   $\\mathbf{y}(t):=[y_{1,t},…,y_{N,t}]’$ : $N$개의 네트워크 노드에서 모니터링된 discrete time instance $t\\in[1,T]$  $\\mathbf{Y} := [\\mathbf{y}(1),…,\\mathbf{y}(T)]$ : $N\\times T$ matrix. $N$개의 load curve matrix.  $\\Omega\\subseteq{1,…,N}\\times {1,…,T}$ : Set of index pair $(n,t)$.  $\\mathcal{P}_\\Omega(\\ \\cdot\\ )$ : matrix sampling operator, $\\Omega$에 포함되지 않은 index pair $(n,t)$의 값들을 0으로 매핑, 나머지는 그대로 유지.  결과적으로 incomplete한 Spatiotemporal load curve data는 다음과 같이 모델링 할 수 있음.   여기서 $\\mathbf{X},\\mathbf{O},\\mathbf{E}$는 각각 nominal load profile, outlier, error를 의미. 따라서 nominal observation $y_{n,t}=x_{n,t}+e_{n,t}$가 된다. ($x$는 nominal load profile 이고 $y$는 nominal observation 임에 유의)위의 모델은 inherently underdetermined인데 observation $\\mathbf{Y}$로 부터 unknown $\\mathbf{X,O}$를 estimation 해야하기 때문. 이를 극복하기위해 load profile과 outlier가 가지고있는 두가지 속성을 이용함.   Low-rank property of $\\mathbf{X}$ : 전력 사용 패턴의 주기성과 수용가에 따른 공통된 패턴적 특징으로 인해 $\\mathbf{X}$는 linearly dependent하고 따라서 $\\mathbf{X}$은 low rank를 갖음.  Sparsity of $\\mathbf{O}$ : Outlier들은 간헐적으로 발생하기때문에 $\\mathbf{O}$는 sparse matrix임.[7]에서는 low-rank 속성을 바탕으로 data cleansing을 수행하지만 row-wise manner로 동작. 반면에 본 논문에서는 matrix $\\mathbf{X}$에 기반하므로 spatial dependency까지 고려한다는 장점이 있음. 2.B. Communication network model   각 스마트 미터/AMI는 간단한 local computation이 가능하다고 가정.  복잡한 커뮤니케이션은 불가능하지만 single-hop communication 가능.  AMI 네트워크는 undirected graph $G(\\mathcal{N},\\mathcal{L})$로 정의.  Node $n\\in\\mathcal{N}$은 single-hop neigboring peers ($\\mathcal{J}_n$)과 통신 가능.  각 노드는 적어도 1개 이상의 neighborhood를 가지고 있으며 (no isolation), 비록 single-hop communication만 허용하나 최종적으로 각 노드는 전체 데이터 $\\mathbf{Y}$를 확보 할 수 있음.2.C. Load curve cleansing and imputation Load curve cleansing과 imputation은 목적은 다음과 같음.   Outlier 판독과 제거  Nominal load matrix $\\mathbf{X}$의 missing value 수정  Denoising즉 incomplete, noisy, outlier-contaminated Spatiotemporal load data인 $\\mathcal{P}_\\Omega(\\mathbf{Y})$로부터 nominal load profiles $\\mathbf{X}$와 outliers $\\mathbf{O}$를 estimation해야함. 결과적으로 본 문제는 estimation-interpolation-detection이 결합된 문제이며, load forecasting과는 다른 문제임에 유의해야함.3. Principal components pursuit Principal components pursuit (PCP)를 통해 효과적으로 $\\mathbf{X,O}$의 estimation이 가능.                                ${|\\mathbf{O}|}1 := \\sum{n,t}          o_{n,t}          $,                      ${|\\mathbf{X}|}_* := \\sum_i\\sigma_i(\\mathbf{X})$, $\\sigma_i()$는 $i$-th singular value를 의미.수식에 대한 intuitive 한 해석은 아래와 같음.   reconstruction error 최소화  low rank $\\mathbf{X}$에 대한 incentive  sparse $\\mathbf{O}$에 대한 incentive(P1)은 batch estimation을 가능하게 하고 (set $\\Omega$에 대해 정의되어 있기때문) 나아가 분산 최적화를 수행하는 기반이 됨.커뮤니케이션 오버헤드, 개인 보안 이슈, 커뮤니케이션 에러, robustness 등의 측면에서 중앙 최적화로 (P1)을 푸는 것보다 분산으로 해결하는 것이 도움이 됨.따라서 본 논문에서는 분산 버전의 PCP (DPCP)를 제안함. 4. Distributed cleansing and imputation DPCP 알고리즘은 (P1) 문제를 스마트 미터 네트워크를 통해 계산.각 노드 (스마트미터)는 매 iteration $k=1,2,3,…$을 통해 인접한 스마트미터와 커뮤니케이션하면서 간단한 local optimization task를 푼다.최종 목표는 분산최적화를 통해 얻은 local estimation $\\mathbf{x}_n[k]$와 $\\mathbf{o}_n[k]$가 $k\\rightarrow\\infty$ 상황에서 중앙최적화로 얻은 $\\mathbf{\\hat{X},\\hat{O}}$의 $n$-th row와 동일해야함. 각 노드의 제한적인 메모리와 계산 복잡도를 고려하기 위해 $rank(\\mathbf{\\hat{X}})$의 upper bound $\\rho$를 설정 (PCA에서 복원에 사용할 maximum number of principal components와 유사)$rank(\\mathbf{\\hat{X}})\\leq\\rho$이므로 (P1)을 통해 $\\mathbf{X}=\\mathbf{P,Q}’$로 factorize 가능. $\\mathbf{P,Q}$는 각각 $N\\times\\rho,T\\times\\rho$ matrix임 (Recall PCA).$\\mathbf{P,Q}’$를 통해 (P1)은 아래와 같은 최적화 문제로 변환 가능($\\mathbf{p}_n$은 $\\mathbf{P}$의 $n$-th row vector.)  최적화 문제 (P2)로 reformulation하게되면 estimation 해야하는 variable의 수가 $2NT$ (P1)에서 $\\rho(N+T)+NT$로 감소함. (P2)에 남아있는 $NT$ term (dominant)은 $\\mathbf{O}$에 의한 것인데, sparse matrix이기때문에 $N,T$의 크기가 크더라도 효과적으로 다룰 수 있음.(P2)로 변환된 문제는 여전히 분산최적화에 적합하지않은데 그 이유로   c1) non-seperable nuclear norm in (P2), i.e.,$\\mathbf{P}$  c2) global variable $\\mathbf{Q}$ coupling the per-node summands4.A. A seperable low-rank regularization c1)을 해결하기위해 nuclear norm ${|\\mathbf{X}|}_*$의 alternative form을 사용. 따라서 (P2)는 다음의 (P3)로 변환되고, $\\mathbf{p}_n, \\mathbf{q}_n$으로 분리해서 풀더라도 ${rank}(\\mathbf{\\hat{X}})\\leq\\rho$일 때 (P1) 최적화 결과와 동일하다.  4.B. Local variables and consensus constraints (P3)로 변환하더라도 여전히 global varialbe $\\mathbf{Q}$가 남아있으므로, 이를 해결하기 위해 $\\mathbf{Q}$의 local estimation인 ${\\mathbf{Q}_n}^N_n=1$을 사용함.  (Recall that $\\mathcal{J}_n$ is neigborhood of smart meter $n$)DPCP 알고리즘을 최종적으로 유도하기위해 $\\mathbf{Q}$에 대한 제약조건을 reparametrize함.  4.C. The D-PCP algorithm 제약 조건이 달려있는 (P4) 문제를 Lagrange multiplier $\\bar{\\mathbf{M}}^m_n,\\tilde{\\mathbf{M}}^m_n$을 통해 quadratically augmented Lagrangian function을 얻을 수 있음.  ADMM으로 (P4)에 대한 분산최적화, 매 iteration마다 다음의 단계들을 수행.  요약 위의 스텝들은 intuitive하게 보면 순차적으로 커뮤니케이션을 통한 네트워크 전체 노드에서 $\\mathbf{Q}$의 수렴과 각 노드에서 local optimization을 수행하는 것임.논문에서 전체 알고리즘을 다시 정리했는데, 이 과정에서 $\\mathbf{F}$들이 사라지고 따라서 이웃 노드들의 $\\mathbf{Q}$에 대한 estimation 정보를 유지할 필요없음. 최종적으로 알고리즘이 수렴하면,  분산 최적 결과는 모든 노드에서 동일하고, 또한 $| \\mathcal{P}_\\Omega(\\mathbf{Y}-$ $\\bar{\\mathbf{P}}\\bar{\\mathbf{Q}}_{n’}-\\bar{\\mathbf{O}}| &lt; \\lambda_*$ 이면 central optimization 결과와 distributed optimization 결과가 동일함. ","categories": ["paper"],
        "tags": ["load data","data cleansing"],
        "url": "http://localhost:4000/paper/paper-loadcurve/",
        "teaser":null},{
        "title": "[논문 정리] InfoVAE",
        "excerpt":"InfoVAE : Balancing Learning and Inference in Variational Autoencoder 2018 / arXiv.org / Shengjia Zhao, Jiaming Song, Stefano Ermon 지난 몇년간 ML 분야에서는 VAE(Variational Autoencoder)와 GAN(Generative Adversarial Network)를 필두로 generative model에 대한 연구가 활발하게 진행되었다. 이번에 살펴본 논문은InfoVAE : Balancing Learning and Inference in Variational Autoencoder; Shengjia Zhao et al. 으로,VAE의 목적 함수인 ELBO(Evidence Lower BOund)가 갖는 단점들을 분석하여 새로운 형태의 목적 함수를 제시하고 실험을 통해 결과를 살펴보았다. 1. Backgrounds Generative model은 neural network (NN)를 통해 데이터의 확률 분포 자체를 학습하는 모델로, 그 예로 GAN, VAE 등이 있다. 주요 목표는 데이터 $x$의 분포와 $x$를 잘 설명하는 latent variable $z$의 분포를 학습하는 것이다.하지만 VAE에서 사용되는 ELBO는 위의 두 목표가 상충될 때, $x$의 분포를 학습하는데 좀 더 중점을 두는 문제점이 있다.(결국 $z$와 $x$가 연관성이 떨어지는 문제가 발생할 수 있다.) 2. Variational Autoencoder VAE와 목적함수 ELBO에 대해 간략하게 살펴보면 다음과 같다.   Input variable : $x \\in X$  Latent variable : $z \\in Z$  Data distribution conditioned over $z$ : $p_{\\theta}(x\\mid z)$  Prior distribution : $p(z)$  True underlying distribution : $p_D (x)$Generative model의 기본적인 목적은 다음의 likelihood를 최대화 하는 것을 볼 수 있다. 그러나 $p_\\theta(x)=\\int_z p_\\theta(x\\mid z)p(z)dz$가 intractable하므로 $q_\\phi(z\\mid x)$를 통해 위 식의 lower bound를 maximize하는 방법으로 돌려서 풀게된다. 결과적으로 VAE에서 사용되는 ELBO는 다음과 같다. 또한 $p_\\theta(x,z) \\equiv p(z)p_\\theta(x\\mid z), q_\\phi(x,z)\\equiv p_D(x)q_\\phi(z\\mid x)$로 정의하면 ELBO는 다음의 식으로 변형 될 수 있다.    3. Two problems of VAE 3.1. Amortized inference failures 이상적인 조건 하에서, ELBO 최적화는 위의 두가지 목표를 달성 할 수 있다 (with sufficiently flexible model families for $p_\\theta(x\\mid z)$ and $q_\\phi(z\\mid x)$ over $\\theta , \\phi$).   Capturing $p_D(x)$  Performing correct amortized inference $q_\\phi(z\\mid x)$이는 Eq.(3)를 통해 확인 할 수 있는데, ELBO 최적화는 결국   $p_D(x)$과 $p_\\theta(x)$; data distribution과 model distribution  $q_\\phi(z\\mid x)$와 $p_\\theta(z\\mid x)$; varitational posterior과 true posterior의 KL Divergence를 최소화하는 것이기때문이다 (각각은 위의 1,2 목표와 동일). 하지만 finite model capacity로 인해 두가지 목표 사이에 trade-off가 발생하는 경우, $q_\\phi(z\\mid x)$의 학습이 희생되는 경향이 있는데, 논문에서는 그 이유를 두 가지로 설명하고있다.   Inherent properties of the ELBO objective :ELBO가 매우 부정확한 $q_\\phi(z\\mid x)$를 갖더라도 최대화가 가능.  Implicit modeling bias :$x$의 차원이 $z$에 비해 높기때문에, 최적화 수행 시 data fitting에 바이어스 됨.3.1.1 Good ELBO values do not imply accurate inference ELBO를 재구성하면 log likelihood (reconstruction) term인 와 regularization term 로 구성되어있는 것을 알 수 있다.  먼저 reconstruction term인 만 최적화하는 경우를 살펴보면, inferred latent variable $z\\sim q_\\phi(z\\mid x)$로부터 observing data point $x$의 log likelihood를 최대화하게 된다. 유한한 데이터 셋 ${x_1,…,x_N}$으로부터, $q_\\phi$가 $x_i \\neq x_j$일때 $q_\\phi(z\\mid x_i)$와 $q_\\phi(z\\mid x_j)$가 disjoint support를 갖는 distribution이라하면, $p_\\theta(x\\mid z )$는 각각의 $q_\\phi(z\\mid x_i)$로부터 학습 할 때 $x_i$로 집중되어있는 형태의 분포를 배운다는 것이다. 이로인해 $p_\\theta(x\\mid z )$는 Dirac delta distribution를 따라가는 경향이 발생하기도하는데, 부적절한 $z$를 학습하는데도 불구하고 는 $+\\infty$로 간다. 논문에서는 간단한 예시로 $x\\in {-1,1}$인 경우, true prior $p(z)$와 $q_\\phi(z\\mid x)$의 모델링에 대해 살펴보았다. $x=\\pm1$로 conditioned되어있을 때 $q_phi$의 평균과 분산이 각각 $\\pm\\infty,+0$인 경우 가 $+\\infty$로 최대화되는 것을 증명하였다 (이때 $q_\\phi(z\\mid x)$와   $p_\\theta(z\\mid x)$의 KL divergence 또한 $+\\infty$가 된다). 즉  ELBO를 최대화하는 쪽으로 잘 학습함에도 불구하고, 쓸모없는 inference $q_\\phi(z)$를 (ture posterior와 상관없는)를 얻는다는 것이다. 3.1.2 Modeling bias 두번째 문제는 modeling bias로 ELBO에 $x$와 $z$에 대한 요소가 모두 존재하지만 $x$에 대한 error term이 더 dominant하다는 것이다. 예를들어, 두 $n$-dimensional Gaussian distribution $\\mathcal{N}(0,I), \\mathcal{N}(\\epsilon,I)$의 KL-divergence는 아래와 같다. 보통 $x$가 $z$에 비해 고차원이기 때문에, $x$의 오차를 줄이는 것이 더 효과적이기때문에, $z$가 희생되는 경향이 생긴다. 나아가 이러한 문제는 아래 현상의 원인이 될 수 있다.   Inference 성능의 약화  트레이닝 데이터에 대한 오버피팅3.2. The information preference propoerty PixelRNN/PixelCNN과 같은 복잡한 $p_\\theta(x\\mid z )$ 복원 방법들은 natural image dataset의 샘플 퀄리티를 크게 향상시켰으나, latent variable $z$를 무시하는 새로운 문제($x$와 $z$의 mutual information이 굉장히 작아지게되는) 문제가 발생하게 되었다.직관적인 원인은 $z$에 상관없이 학습된 $p_\\theta(x\\mid z )$가 동일하다는 것인데, 의미있는 latent variable을 찾는 목적 달성이 전혀 이뤄지지 않게 되는 것이다. 논문에서는 이러한 현상을 information preference problem이라 하며, 이와 연관해서 ELBO에 대한 다음과 같은 해석을 내놓았다. 요약하면 latent variable $z$을 활용하지 않더라도도 0으로 최적화가 가능하다는 것이다. ELBO의 재구성 식인 (3)을 보면 $-D_{KL}(p_D(x)\\parallel  p_\\theta(x))$과  두 가지 term으로 구성되어있는데 다음을 통해 $x$와 $z$ 사이의 연관성이 없어도 global optimum을 얻는 것을 보였다.  4. The InfoVAE model family 위의 두 문제 (3.1,3.2)를 해결하기위해 새로운 학습 목적함수를 제안했다. 즉 원래 ELBO 수식으로부터 1) Scaling parameter $\\lambda$를 통한 $x$에 편중되는 문제 해결 (3.1)2) Mutual information maximization term을 추가하여 $x,z$ 사이의 연관성 문제를 해결 (3.2) 따라서 새로운 목적함수는  (5)와 (6)은 동일한 수식인데, (6)의 경우 효율적인 최적화가 가능하다고 한다.(6)의 마지막 $D_{KL}(q_\\phi(z)\\parallel  p(z))$ term 계산에서 어려움이 있을 수 있는데 ($\\log q_\\phi(z)$ 파트), unbiased sampling이 가능하여 lieklihood free optimization technique을 활용 할 수 있다.나아가 다음의 조건에서 KL-divergence 외에 다른 strict divergence $D(q_\\phi(z)\\parallel  p(z))$를 사용한 목적함수 $\\hat{\\mathcal{L}}_{\\text{infoVAE}}$로 교체하더라도 최적화에 전혀 문제가 되지 않음을 보였다.  ${\\mathcal{L}}_{\\text{infoVAE}}$은 이전에 발표된 여러 모델의 일반화된 버전으로 볼 수 있다. 예를들어   $\\alpha=0, \\lambda=1$ : 기존 ELBO 모델  $\\lambda&gt;0, \\alpha+\\lambda-1=0$, KL-divergence : $\\beta$-VAE.  $\\alpha=1,\\lambda=1$, Jensen Shannon divergence : Adversarial Autoencoder4.1 Divergence families Proposition 2를 통해 KL-divergence외에 다른 divergence의 사용이 가능하므로, 논문에서 3가지 divergence에 대해 고려했다.   Adversarial training : Adversarial Autoencoder (AAE)에서 Adversarial discriminator를 통해 $q_\\phi(z)$와 $p(z)$사이의 Jensen-Shannon divergence를 approximately 최소화.  Stein Variational Gradient : KL-divergence의 Gradient를 계산해서 $D_{KL}$에 대한 gradient discent minimization 수행.  Maximum-Mean discrepancy : 두 분포의 moment를 통해 거리 수치화. 5. Experiments 시뮬레이션을 통해서 논문에서 전개한 이론적인 측면을 확인한다.  $x$가 -1 혹은 1 값을 갖는 경우에 대한 간단한 시뮬레이션인데,기존 ELBO objective에서 $p(z)$와 $q_\\phi(z\\mid x)$ 사이의 $D_{KL}$ term이 존재하지만  그래프를 살펴보면 $p(z)$와 $q_\\phi(z\\mid x)$의 형태가 다른 것을 확인 할 수 있다.반면에 InfoVAE의 경우 이러한 문제를 극복한 것을 확인 할 수 있다.  이 그래프는 ELBO의 over/under estimation에 관한 그래프로서, $\\log \\text{det(Cov}[q_\\phi(z)])$를 training, test set에 대해 도시하였다.standard Gaussian prior $p(z)$의 $\\text{Cov}[p(z)]=I$이므로 $\\log \\text{det(Cov}[p(z)])=0$이다.ELBO의 경우 ideal case와 큰 차이가 나타나는 것을 확인 할 수 있다. 특히 training set이 작을때 이러한 현상이 두드러진다. 반면에 MMD를 사용한 InfoVAE의 경우 이러한 문제가 나타나지 않는 것을 볼 수 있다.  위 그림은 500개로 트레이닝 했을때 $p(z), q_\\phi(z)$의 contour이다. InfoVAE의 경우 prior와 유사한 분포를 갖는 반면에, ELBO는 동떨어진 결과를 나타내고, 결국 이는 Fig. 2에서 ELBO의 overestimation을 의미한다.  MNIST 데이터셋에 대한 VAE와 InfoVAE의 reconstruciton, generation 이미지이다.상단은 ELBO 그래프인데, sharp한 reconstruction들을 생성하지만 generation 성능이 상당히 나쁜 것을 볼 수 있다. 따라서 복원 오차를 줄이는데에 generalization 성능 (learning good prior $z$)이 희생 된 것으로 보인다. 반면에 하단의 InfoVAE결과는 reconstruciton과 generation 결과 모두 숫자에 근접한 이미지들이 생성되는 것을 확인 할 수 있다. 요약   Generative model에서는 sample generation도 중요하지만 잘 설명이 되는 latent variable $z$의 학습도 매우 중요하다.  하지만 기존 ELBO objective는 크게 두가지 한계를 내포하고 있는데, 첫번째로 $z$의 학습보다 $x$의 reconstruciton에 더 영향을 받는다는 것이고 두번째는 $x$와 $z$의 의미적인 연결에 문제가 있다는 것이다.  따라서 ELBO 내에서 $z$에 대한 웨이트를 주고 $x,z$ 사이의 mutual information에 보상을 줘서 두가지 문제를 해결한다.  결과적으로 InfoVAE를 통해서 기존 VAE보다 발전된 샘플을 얻으면서 latent variable $z$의 학습도 잘 이루어졌다.","categories": ["paper"],
        "tags": ["machine learning","generative model"],
        "url": "http://localhost:4000/paper/paper-infovae/",
        "teaser":null},{
        "title": "[Machine Learning] 윈도우 10 텐서플로우 (GPU) 설치하기",
        "excerpt":"Tensorflow-GPU installation for Windows 10 최대한 간단하게 정리한 윈도우 10에서 텐서플로우 GPU 설치하기. (2018년 12월 기준)   GPU가 필요없다면 바로 1번으로…0. GPU support GPU를 활용하기 위해서는 먼저 다음을 필요로 한다.   CUDA 지원 GPU 카드  NVIDIA GPU 드라이버 384.x 이상 (for CUDA 9.0)  CUDA Toolkit (현재 CUDA 9.0 지원)  cuDNN SDK (7.2 이상)GPU와 드라이버는 미리 설치해두고, 다음을 진행한다.   아카이브에서 CUDA toolkit 9.0 다운로드 후 설치 (Base installer, patch 1/2/3/4)https://developer.nvidia.com/cuda-90-download-archive      환경 변수에서 CUDA_PATH 확인(기본 C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v9.0)     CUDA toolkit 버전에 맞는 cuDNN 라이브러리 다운로드 및 압축풀기 (v7.4.2 for CUDA 9.0)https://developer.nvidia.com/rdp/cudnn-download  압축 해제 3개의 파일을 앞선 CUDA_PATH 경로 내의 동일한 폴더로 이동1. Anaconda를 통한 텐서플로우 설치   최신 버전의 아나콘다 다운로드 후 설치 (Python 3.7 version)https://www.anaconda.com/download/#windows  Anaconda prompt 실행 후 텐서플로우 구동을 위한 가상 환경 생성 (Python 3.6 버전 지정 필수)    conda create -n 환경이름 pip python=3.6        추가적으로 설치하게될 패키지 목록들이 뜨고 y 눌러 진행  생성 완료 후 가상 환경 실행    conda activate 환경이름        가상 환경이 실행되면 (base) C:\\~ 가 (환경이름) C:\\~로 변경된다.     다음의 코드를 차례로 실행 (CPU 버전 설치 시 -gpu를 빼고 실행)    pip install --upgrade pippip install --upgrade tensorflow-gpu        설치가 끝나면 verification을 위해 다음의 코드를 실행해본다.    python -c \"import tensorflow as tf; tf.enable_eager_execution();  print(tf.reduce_sum(tf.random_normal([1000, 1000])))\"        설치가 정상적으로 완료되었다면 GPU에 대한 정보가 주르륵 출력되고 최종적으로 다음과 같은 결과가 화면에 나타난다.    tf.Tensor(숫자, shape=(), dtype=float32)        가상 환경 종료.    conda deactivate      ","categories": ["Machine Learning"],
        "tags": ["machine learning","tensorflow"],
        "url": "http://localhost:4000/machine%20learning/install-tf/",
        "teaser":null},{
        "title": "[Machine Learning] 예측 모델의 오차 메트릭에 대해서",
        "excerpt":"Error measurements in forecasting 1. Error Metric 전력 예측 모델에 관한 다수의 논문을 살펴보면 보통 두 가지 error metric을 사용한다.   Root Mean Squared Error (RMSE)  Mean Absolute Percentage Error (MAPE)RMSE와 MAPE는 정의는 다음과 같다.   $t$ : time index, $t\\in{0,….,T}$  $y_t$ : 실측값  $f_t$ : 예측값                                         RMSE            SE (squred error)들의 평균의 root 값.              MAPE (%)            실제값 대비 오차의 절대값들의 평균 * 100      특히 인공 신경망 (Artificial neural network) 기반의 예측 모델의 경우 대체로 SSE (Sum of Squared Error)를 loss function으로 활용하기때문에 RMSE와 연관성이 크고, 따라서 논문 에러 비교에 빠지지 않고 등장한다. RMSE 외에 MAPE 또한 상당히 자주 등장한다. MAPE 수식을 살펴보면 실측 값 대비 오차의 퍼센티지이므로, 개인적으로는 RMSE에 비해 직관적이라고 생각한다. 하지만 MAPE가 오차 비교를 위해 자주  활용되더라도 MAPE가 갖는 단점들로 인해 loss function으로는 거의 사용되지않는다. 2. MAPE       실측값이 0인 경우 MAPE 계산이 불가능하다. 당연한 이야기지만 0으로 나누는 것이 불가능하기때문에 문제가 발생한다. 간혹 0인 경우만 빼고 MAPE를 계산 할 수도 있는데, 이는 곧 0인 경우는 오차가 어떻든 상관없다 라는 뜻이므로 주의가 필요하다.         양수로 이루어진 데이터 (e.g., 전력 사용량)에 대해 underforecast (실측값보다 작게 예측)와 overforecast (실측값보다 크게 예측)가 MAPE에 끼치는 영향이 다르다. underforecast의 경우 MAPE의 최대값은 $100\\%$지만 overforecast의 경우 최대값의 한계가 없다. 따라서 MAPE를 minimize하는 방향으로 예측 모델을 학습하게 되면 모델이 underforecast하도록 bias된다.         실측값이 0에 가까운 경우 분모가 매우 작아짐에 따라서 절대 오차 (absolute error, $\\mid y_t-f_t\\mid$)값이 작더라도 APE (Absolute Percentage Error)가 크게 증가하는 경우가 발생한다. 이로인해 평균을 취하더라도 $100\\%$이상의 값을 얻는 경우가 있는데, 어플리케이션에 따라서 이러한 결과가 성능 척도 비교에 부적절 할 수 있다. 예를들어 전력 사용량 예측 모델에서 실측값은 0.001 kWh이고, 예측값은 1 kWh라 하면 APE가 $1000\\%$가 되는데, 어플리케이션에서 해당 예측값이 끼치는 영향이 미미한데 비해 MAPE에 미치는 영향은 매우 크다.   MAPE의 단점들과 underforecasting에 대한 예시는 다음의 링크에 자세하게 설명되어있다. https://stats.stackexchange.com/questions/299712/what-are-the-shortcomings-of-the-mean-absolute-percentage-error-mape ","categories": ["Machine Learning"],
        "tags": ["machine learning","forecasting","loss function"],
        "url": "http://localhost:4000/machine%20learning/error/",
        "teaser":null},{
        "title": "[Jekyll] GitHub 블로그 애드센스 설치하기",
        "excerpt":"Jekyll 블로그에 구글 애드센스 설치하기 0. 설치하기 전에.. 현재 블로그는 minimal mistakes 테마를 바탕으로 작성되었고,개발자의 샘플 페이지에서도 애드센스가 각 페이지 하단에서 위치하는 것을 확인 할 수 있다.블로그에 구글 애드센스는 신청 후 승인을 받아야만 운영 할 수 있기때문에,신청하기 전에 미리 어느정도 블로그를 운영해서 일정 수준의 방문자와 포스트를 갖춰야 할 필요성이 있다. 1. 기본적인 애드센스 설치 방법 먼저 애드센스를 홈페이지에 달기위해 구글 애드센스 홈페이지에서 신청을 해야한다.신청하게되면 아래와 같은 형식의 광고 코드를 자신의 홈페이지에 반영해서 업데이트하라는 문구가 나타난다. &lt;script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"&gt;&lt;/script&gt;&lt;script&gt;  (adsbygoogle = window.adsbygoogle || []).push({    google_ad_client: \"ca-pub-9089895411733030\",    enable_page_level_ads: true  });&lt;/script&gt;Minimial mistakes 테마를 기준으로 _layout\\default.html 파일 내에서 아래 코드의 하단에위의 애드센스 스크립트를 붙여 주었다. &lt;div class=\"initial-content\"&gt;   ~~~  &lt;/div&gt;&lt;script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"&gt;&lt;/script&gt;~~~~위처럼 수정 사항을 반영하고 애드센스 홈페이지에서 진행하는 단계를 완료하면 구글에서 승인 심사를 진행하고1~2일 후에 결과가 나온다.   처음 시도했을때는 포스트가 적어서인지 거절되고 2번째 신청했을때 승인 결정이 나왔다. 2. minimal mistakes 테마에서 포스트 하단에 넣기 디자인 상 깔끔하다고 생각하는 광고의 위치가 각각   테마 개발자의 샘플페이지처럼 매 페이지 최하단에 위치  각 포스트의 컨텐츠의 마지막 부분 (태그/ 댓글창 등의 바로 위)였기때문에 해당 위치에 애드센스를 설치하는 법을 살펴봤다.테마 개발자는 위의 코드보다 아래의 코드를 사용하는 것을 추천했다. &lt;script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"&gt;&lt;/script&gt;&lt;div align=\"center\" style=\"margin: 1em 0;\"&gt;&lt;ins class=\"adsbygoogle\"     style=\"display:block; border-bottom: initial;\"     data-ad-client=\"ca-pub-9089895411733030\"     data-ad-format=\"auto\"&gt;&lt;/ins&gt;&lt;/div&gt;&lt;script&gt;(adsbygoogle = window.adsbygoogle || []).push({});&lt;/script&gt;2.1 각 페이지 최하단 설치 먼저 페이지 최하단에 설치하는 방법은 두 가지이다.위의 코드를 아래에서 말하는 해당 위치에 붙여넣으면 된다.   _layout\\default.html 파일 내에 &lt;div class=\"initial-content\"&gt; ~~~ &lt;/div&gt; 다음 부분. (기본 설치와 같음)  _include\\footer\\custom.html 파일 내에 작성.제대로 동작하면 다음과 같이 광고가 나타난다.                   2.2 각 포스트 내용 하단 설치 이 테마에서 기본적인 웹페이지는 _layouts\\single.html의 형식을 공유한다.single.html을 살펴보면 포스트를 .md 파일로 작성했을 때 해당 컨텐츠의 내용이 &lt;section class=\"page__content\" itemprop=\"text\"&gt;~~~&lt;/section&gt;에 위치하므로 &lt;/section&gt; 바로 위에 애드센스 코드를 넣어주었다. 그러면 아래와 같이 포스팅 바로 하단에 광고가 위치하는 것을 볼 수 있다.|| ","categories": ["Jekyll"],
        "tags": ["지킬","깃허브","블로그","애드센스"],
        "url": "http://localhost:4000/jekyll/adsense/",
        "teaser":null}]
