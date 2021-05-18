import React from "react"
import "./App.css"
import SocialIcons from "./SocialIcons.js"

function Content(props){

  const testStr=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus lacinia lorem, sit amet imperdiet orci. Vivamus vel quam sodales, dapibus justo sit amet, aliquam justo. Curabitur massa eros, blandit ut est nec, dictum pulvinar sem. Suspendisse egestas lorem odio, vitae interdum nisl pellentesque et. Etiam blandit suscipit viverra. Vivamus pharetra, tortor eget feugiat suscipit, odio ligula sollicitudin libero, at dictum leo magna non augue. Curabitur porta tristique ante. In consectetur convallis dolor sit amet sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vitae purus et tortor commodo ullamcorper sed non elit. Nunc quis magna turpis. Cras convallis purus non ultricies porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis sapien rhoncus, vestibulum lorem maximus, congue justo. Curabitur ipsum lectus, condimentum sed luctus et, semper vel odio. Morbi tristique malesuada tortor at imperdiet.


  Etiam quis ex aliquam, vestibulum massa sed, egestas ipsum. Phasellus sagittis facilisis purus eu eleifend. Etiam convallis, sem sed semper lacinia, leo metus ullamcorper mauris, sed congue quam nisl id nisl. Vivamus dignissim ultricies enim, quis imperdiet erat aliquam eu. Etiam mollis elementum mi sit amet scelerisque. Sed feugiat non nisi vitae pulvinar. Duis ac hendrerit odio. Nam finibus tincidunt gravida. Duis eget viverra nunc, sit amet vulputate massa. Praesent tincidunt neque rhoncus consequat finibus.

  Phasellus malesuada convallis est, eu gravida erat finibus ac. In est lectus, varius sed imperdiet varius, tincidunt et tellus. Aenean nec scelerisque orci. Nulla odio tortor, laoreet a congue eget, maximus vitae nisl. Sed elit elit, dignissim id ex sed, ultrices vulputate quam. Etiam non nibh auctor, mollis eros vitae, pulvinar augue. Donec laoreet placerat lectus vel viverra. Donec pellentesque ante tellus, a pellentesque libero posuere sed. Suspendisse eu sapien at erat tempus egestas. Sed viverra, magna non tristique tincidunt, odio nibh hendrerit ligula, sed porttitor massa turpis sit amet elit. Fusce egestas, urna quis faucibus facilisis, lorem ante feugiat nunc, at auctor tellus lectus id tortor. Aenean eleifend dolor enim, quis ultrices tellus pellentesque ac. Mauris consectetur feugiat ex, sed luctus erat mollis nec. Praesent et convallis leo. Nulla id ante eu tortor tristique bibendum.

  Sed rutrum quis odio eu semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt lectus sed ligula egestas, in egestas quam egestas. Suspendisse lectus massa, porttitor commodo odio et, ullamcorper pulvinar purus. Donec varius pellentesque egestas. Suspendisse pellentesque condimentum nulla, ac suscipit tortor porttitor sed. Suspendisse pretium iaculis ex et volutpat. Aliquam nisi turpis, convallis ac sollicitudin eu, imperdiet in sapien. Sed dignissim erat sollicitudin dui efficitur, quis varius purus porttitor. Duis volutpat nunc laoreet tincidunt iaculis. Nullam eleifend aliquam cursus. Duis at vestibulum urna. Donec diam mauris, tempus eget sollicitudin et, tempus a leo. Morbi rhoncus convallis diam id lobortis. Nulla venenatis turpis mi, nec elementum tortor laoreet at.

  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec aliquam lorem vitae interdum feugiat. Nunc fringilla mauris ut eros varius eleifend. Maecenas pellentesque tristique fringilla. Duis ipsum ante, auctor sagittis nunc in, sodales rutrum sem. Donec fermentum bibendum dapibus. Pellentesque hendrerit, diam id blandit pretium, dui massa mollis dolor, sit amet condimentum elit enim nec lorem. Praesent non diam dui. Donec non convallis augue. Praesent commodo diam enim, in efficitur elit cursus sed. Maecenas a eros ut ligula facilisis posuere et ut turpis. Morbi efficitur urna nec diam consequat, in malesuada mauris egestas. Aliquam pretium erat vel odio porttitor, id posuere velit fringilla. Suspendisse potenti. Phasellus id finibus nibh.`


  return (
      <div className="flex-row grid grid-cols-5">
          <div className="ml-4 flex-col text-blue-200 font-roboto">
            <img src={process.env.PUBLIC_URL + '/prof_pic.jpg'} className="p-4 rounded-full" alt="prof_pic"/>
            <h4 className="font-roboto-slab p-1 text-center text-base md:text-xl">Harsha Honasoge</h4>
            <SocialIcons/>
           </div>
          <div className="text-blue-200 font-roboto pt-10 pl-20 md:pr-0 pr-4 md:col-span-3 col-span-4">
          <p style={{whiteSpace: 'pre-line'}} className="text-lg">{testStr}</p>
          </div>
      </div>
  )
}

export default Content;
