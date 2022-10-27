import React from 'react';
import {
  Container,
  QList,
  QDetail,
  QHead,
  QUser,
  QTitle,
  Avatar,
  Time,
  QInfo,
  Nickname,
  QTag,
  QTagList,
  QContent,
  QRightDetail,
} from './style';
import { displayCreatedAt } from '../../utils/displayCreatedAt';
const QuestionList = () => {
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
    <Container>
      <QList>
        {data.map((item) => (
          <QDetail>
            <QHead>
              <p>{item.vote ? item.vote : 0} votes</p>
              <p>{item.answers ? item.answers : 0} answers</p>
              <p>{item.views ? item.views : 0} views</p>
            </QHead>
            <QRightDetail key={item.questionId}>
              <QTitle>{item.title}</QTitle>
              <QContent>{item.content}</QContent>
              <QUser>
                <QTagList>
                  {item.tags.map((tag) => (
                    <QTag>{tag.content}</QTag>
                  ))}
                </QTagList>
                <QInfo>
                  <Avatar>
                    {item.member.img === '사진' ? null : item.member.img}
                  </Avatar>
                  <Nickname>{item.member.nickname}</Nickname>
                  <Time>{displayCreatedAt(item.createdAt)}</Time>
                </QInfo>
              </QUser>
            </QRightDetail>
          </QDetail>
        ))}
      </QList>
    </Container>
  );
};

export default QuestionList;
