import React from "react";

function Tips(props) {
  return (
    <div {...props}>
      <ol>
        <li>上傳圖檔 </li>
        <li>框選區塊並在comment命名 </li>
      </ol>
      <p>欄位參考</p>
      <table>
        <tbody>
          <tr>
            <td>
              <b>name</b>
            </td>
            <td>
              <b>欄位名稱</b>
            </td>
          </tr>
          <tr>
            <td>cardAddr</td>
            <td>寄卡地址</td>
          </tr>
          <tr>
            <td>companyName</td>
            <td>公司名稱</td>
          </tr>
          <tr>
            <td>companyTelNo</td>
            <td>公司電話</td>
          </tr>
          <tr>
            <td>email</td>
            <td>email</td>
          </tr>
          <tr>
            <td>jobTitle</td>
            <td>職稱</td>
          </tr>
          <tr>
            <td>mainArcNo</td>
            <td>居留證號</td>
          </tr>
          <tr>
            <td>mainBirthday</td>
            <td>生日</td>
          </tr>
          <tr>
            <td>mainChName</td>
            <td>中文名</td>
          </tr>
          <tr>
            <td>mainEducation</td>
            <td>教育程度</td>
          </tr>
          <tr>
            <td>mainEleSchool</td>
            <td>畢業小學</td>
          </tr>
          <tr>
            <td>mainEnName</td>
            <td>英文名</td>
          </tr>
          <tr>
            <td>mainGender</td>
            <td>性別</td>
          </tr>
          <tr>
            <td>mainId</td>
            <td>身分證</td>
          </tr>
          <tr>
            <td>mainMobile</td>
            <td>手機</td>
          </tr>
          <tr>
            <td>maritalStatus</td>
            <td>婚姻</td>
          </tr>
          <tr>
            <td>permanentAddr</td>
            <td>戶籍地址</td>
          </tr>
          <tr>
            <td>permanentTelNo</td>
            <td>戶籍電話</td>
          </tr>
          <tr>
            <td>residenceTelNo</td>
            <td>現居電話</td>
          </tr>
          <tr>
            <td>residenceType</td>
            <td>住宅所有</td>
          </tr>
          <tr>
            <td>subBirthday</td>
            <td>附卡生日</td>
          </tr>
          <tr>
            <td>subChName</td>
            <td>附卡中文名</td>
          </tr>
          <tr>
            <td>subEnName</td>
            <td>附卡英文名</td>
          </tr>
          <tr>
            <td>subGender</td>
            <td>附卡性別</td>
          </tr>
          <tr>
            <td>subMobile</td>
            <td>附卡手機</td>
          </tr>
          <tr>
            <td>subPartyId</td>
            <td>附卡身分證字號</td>
          </tr>
          <tr>
            <td>subRelation</td>
            <td>附卡與正卡人關係</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tips;
