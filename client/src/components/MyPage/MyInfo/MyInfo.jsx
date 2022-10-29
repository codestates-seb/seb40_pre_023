import React from 'react';
import LayoutContainer from '../../../components/LayoutContainer/LayoutContainer';
import {
  Container,
  ProfileImg,
  ProfileInfo,
  ProfileDay,
  EditMenu,
} from './style';
import { Link } from 'react-router-dom';
const MyInfo = () => {
  const data = [
    {
      createdAt: '2022-10-26T17:00:47.2460054',
      modifiedAt: '2022-10-26T17:00:47.2460054',
      questionId: 1,
      member: {
        createdAt: '2022-10-26T17:00:47.2460054',
        modifiedAt: '2022-10-26T17:00:47.2460054',
        memberId: 1,
        email: 'hgd1@gmail.com',
        nickname: 'honggildong',
        about: '저는 홍길동1입니다.',
        img: '사진',
      },
      vote: '1',
      answers: '0',
      views: '0',
      title:
        'Test1ffdddsdsdafsddsdadskujfkdlfsghdjfksghkjdsfghkjfdshgkjldsfjfkdsahdskjfadkjsfhsdkjfhdksfjhdhsfjkhfdsfsdakhnfgkjsghdfsjkghjkfdskjghfgdkjlhafjhgjdfskghdfskjghsdkfjghdkfsj',
      content:
        '1번째 글입니다djskafhdsjkfhjksdfhjk sddkjdfgh jkdsfghdfkjsghf dkjlghdsfjk hdsjkafhdasjkfhjdsakfhkdsajlfhkdsjalfhskajsdajkhfkfjdslfskadjhdfskaljdskjfhkldasjfhjkdsalfhjksdafhjkkjdsfhjkdasfhkjdlsahfdjksalfhdkjsghfdjksghfdjkshgkjfdshgjkfdshgjkfdshgkjlfsdhgjkfdshgkjdfshgkjlfdshgkjlfdshgkjdfshgjklsdfhhasdkjfhdsakjflhsadjklfhsdshafkjldhsfjklhsdkjldsjkahfkdjsafhdkjsafhksdajlfhdjksfhjklsdkjfhdsakfjlhsadfjkldhskjdsahfjkhdsfajkfhasdkjfhdskjalhfkljfsdahjkfdshajklfdsahkjfhdasksjaflhdshajkfhdsakjlfhdsajklfhjklasfdhjksfhdsjklafhkajsdlhfsjksafnkjdsglkhfdjsgkljdsfgkldshfjkdhsfjkdskjhdsjkghkdjlsfghdfjklsghfdjkslghhdsajklfhdsjakfhdskjdsjkhfjkdashfjkdsahfjkldsahfjkdshfjkldsahfjklsadhfjksdsajkfhdsakjfhsakjdlfhjdksaldshajkfhdsfkjlsdafhnkjsagbsdfjkgbdfsjkghdfsjkgdsfhgkjghsdfaljkhdsajkfhdsjkafhdsjakfhksladfhsdjkdsajklfhsadjklfhksjadlfdsahfjkdshafkjsadhfkjsddsjhfkdsahfkjsdhdshfkjhsdfakjafgbkjhsadgfhjkdasfghjkasdgfjsad.',
      status: 'unanswered',
      tags: [
        {
          tagId: 1,
          content: 'java',
        },
        {
          tagId: 2,
          content: 'javascript',
        },
        {
          tagId: 3,
          content: 'react',
        },
      ],
    },
    {
      createdAt: '2022-10-26T17:00:47.2460054',
      modifiedAt: '2022-10-26T17:00:47.2460054',
      questionId: 2,
      member: {
        createdAt: '2022-10-26T17:00:47.2460054',
        modifiedAt: '2022-10-26T17:00:47.2460054',
        memberId: 2,
        email: 'hgd2@gmail.com',
        nickname: 'honggildong223',
        about: '저는 홍길동2입니다.',
        img: '사진',
      },
      title: 'Test2',
      content:
        '2번째 글sadfjksajdfdsafdslkjdlksfjlskdfjklsdjfksdlgjlfasdjhdjksahfsadjklfhsdajklfhsdjkldsjkgfshdfsjkghkfjfjkdghgdksfjlhgfjk입니다.',
      status: 'unanswered',
      tags: [
        {
          tagId: 1,
          content: 'java',
        },
        {
          tagId: 2,
          content: 'javascript',
        },
      ],
    },
  ];
  return (
    <LayoutContainer>
      <Container>
        <div className="profile-name">
          <ProfileImg />
          <ProfileInfo>
            <div className="nickname">SkyRain1225</div>
            <ProfileDay>
              <div className="since">
                <svg
                  aria-hidden="true"
                  className="svg-icon icon-since"
                  width="18"
                  height="18"
                >
                  <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
                </svg>
                <div className="since-msg">Member since today</div>
              </div>
            </ProfileDay>
          </ProfileInfo>
        </div>
        <EditMenu>
          <Link to="/edit" className="Edit">
            <svg
              aria-hidden="true"
              className="icon-edit"
              width="18"
              height="18"
            >
              <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z"></path>
            </svg>
            <div className="edit-msg">Edit Profile</div>
          </Link>

          <div className="Network">
            <svg
              aria-hidden="true"
              className="icon-network"
              width="18"
              height="18"
            >
              <path
                d="M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3Z"
                fill="#8FD8F7"
              ></path>
              <path
                d="M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2Z"
                fill="#155397"
              ></path>
              <path fill="#46A2D9" d="M3 5h12v2H3z"></path>
              <path fill="#2D6DB5" d="M3 8h12v2H3z"></path>
            </svg>
            <div className="network-msg">Network profile</div>
          </div>
        </EditMenu>
      </Container>
    </LayoutContainer>
  );
};

export default MyInfo;
