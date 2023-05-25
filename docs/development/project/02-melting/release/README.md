# release

### v1.0.0 (2021.11.08)

- 서비스 배포 (iOS & Android)

### v1.1.0 (2021.11.24)

- **멜팅 댓글 채택 기능** 추가

### v1.2.0 (2021.12.04)

- iOS & Android 앱 아이콘 변경
- `fix bug`: **Android firebase SMS authentication 화면 자동으로 넘어가는 이슈** (안드로이드는 SMS 인증 번호가 오면 자동으로 넘어간다고 함.)

### v1.3.0 (2021.12.15)

- 욕 필터링 추가
- 해결된 고민은 포스트에 **melted** 마크 추가
- 나이 시스템 만 나이에서 한국나이로 변경
- 댓글 채택기능은 [연애 고민, 짝사랑, 썸] 토픽에 한정
- 관리자 계정은 멜팅 뱃지 아이콘 추가

## v1.4.0 (2022.01.06)

- 다른 **유저 프로필 확인 기능** 추가 (작성한 글 개수, 댓글 개수, 멜팅 포인트 등)
- **React Native v0.65.2 로 migration**
- facebook SDK, firebase, Kakao login version up
- **게시글 내용 선택, 복사 가능** (RN Text component -> RN TextInput)

## v1.5.0 (2022.01.14)

- 댓글 스타일링
- `fix bug`: 게시글 내에서 유저 프로필 조회 불가 이슈

## v.1.6.0 (2022.01.17)

- `fix bug`: TextInput 으로 바꾼 후 부분 스크롤링 되는 이슈

## v.1.7.0 Android (2022.01.29)

- Android는 다시 처음 RN Text component 로 가고 iOS 만 RN TextInput component 로
- `fix bug`: Android Push Notification 클릭 시 앱 내에서 여러번 Redirect 되는 이슈
- **게시글, 댓글의 링크 클릭 기능**

## v.1.8.1 (2022.02.12)

- **앱 내 애드몹 광고 추가**
- **Sentry 추가**

## v1.8.2 (2022.03.15)

- **Javascript 에서 Typescript 로 마이그레이션**

## v2.0.0 (2022.06.28)

- **멜팅 채팅 기능**
- 차단한 유저 채팅 불가하게 수정
- **멜팅 포인트 도입**
- navigation 리팩토링

## v2.1.0 (2022.08.03)

- 채팅 기능 한시적 무료
- **첫 실행 시 앱 소개 화면 추가**

## v2.1.1 v2.2 Android (2023.03)

- `fix bug`: **회원가입 시 Android Firebase SMS authentication 사용 시 튕김 이슈** -> Firebase 최신버전으로 업데이트로 해결 (Safetynet deprecated)
