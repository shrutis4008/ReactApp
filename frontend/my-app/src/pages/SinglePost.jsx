import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/bin.png";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";

const SinglePost = () => {
  return (
    <div className="singlePost font-link">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John Doe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/create?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          commodo nulla facilisi nullam vehicula ipsum a arcu. Velit egestas dui
          id ornare arcu odio ut. Ipsum a arcu cursus vitae congue mauris
          rhoncus. Faucibus pulvinar elementum integer enim. In aliquam sem
          fringilla ut morbi. Auctor eu augue ut lectus arcu bibendum at. Vel
          orci porta non pulvinar neque laoreet. Dui vivamus arcu felis bibendum
          ut tristique. Quam lacus suspendisse faucibus interdum posuere lorem.
          Congue eu consequat ac felis donec et odio. Venenatis tellus in metus
          vulputate eu scelerisque felis imperdiet proin. Magna sit amet purus
          gravida quis blandit turpis cursus. Morbi tempus iaculis urna id
          volutpat lacus laoreet non curabitur. Pulvinar pellentesque habitant
          morbi tristique. Felis donec et odio pellentesque diam volutpat
          commodo sed egestas. Leo integer malesuada nunc vel. Ultrices in
          iaculis nunc sed augue lacus viverra vitae. Malesuada bibendum arcu
          vitae elementum curabitur vitae. Vitae elementum curabitur vitae nunc
          sed velit dignissim sodales ut. Odio tempor orci dapibus ultrices in
          iaculis nunc. Hac habitasse platea dictumst quisque sagittis. Urna
          cursus eget nunc scelerisque viverra. Tortor vitae purus faucibus
          ornare suspendisse sed nisi lacus sed. Pretium viverra suspendisse
          potenti nullam ac tortor vitae purus. Ac placerat vestibulum lectus
          mauris. Volutpat ac tincidunt vitae semper. Ac auctor augue mauris
          augue neque gravida in fermentum et. Ornare suspendisse sed nisi lacus
          sed viverra tellus in. Tellus elementum sagittis vitae et leo duis ut.
          Duis ut diam quam nulla porttitor. Aliquet lectus proin nibh nisl
          condimentum id venenatis a condimentum. Blandit turpis cursus in hac.
          Odio ut sem nulla pharetra diam sit amet nisl suscipit. Placerat orci
          nulla pellentesque dignissim enim sit amet venenatis urna. Ultrices
          vitae auctor eu augue ut. Tristique senectus et netus et malesuada
          fames ac turpis. Velit ut tortor pretium viverra suspendisse potenti
          nullam ac tortor. Malesuada fames ac turpis egestas sed tempus urna.
          Ultricies tristique nulla aliquet enim tortor at auctor urna. Turpis
          cursus in hac habitasse platea. At tempor commodo ullamcorper a lacus
          vestibulum sed arcu non. Elementum pulvinar etiam non quam lacus
          suspendisse faucibus. Nibh praesent tristique magna sit amet purus
          gravida quis blandit. Amet commodo nulla facilisi nullam vehicula.
          Elementum sagittis vitae et leo duis ut. Egestas erat imperdiet sed
          euismod. Arcu risus quis varius quam. Diam phasellus vestibulum lorem
          sed risus ultricies tristique nulla. Rhoncus est pellentesque elit
          ullamcorper dignissim cras tincidunt. Ut tortor pretium viverra
          suspendisse. Sit amet nisl suscipit adipiscing bibendum est ultricies
          integer. Velit laoreet id donec ultrices tincidunt arcu. Porttitor leo
          a diam sollicitudin tempor. Posuere urna nec tincidunt praesent.
          Volutpat odio facilisis mauris sit amet. Vivamus at augue eget arcu
          dictum. Nisi lacus sed viverra tellus in hac. Auctor augue mauris
          augue neque gravida in fermentum et. Nisi porta lorem mollis aliquam
          ut porttitor leo. Eget est lorem ipsum dolor sit amet. Orci phasellus
          egestas tellus rutrum. Gravida neque convallis a cras semper. Id diam
          vel quam elementum pulvinar etiam non quam. Sed egestas egestas
          fringilla phasellus faucibus scelerisque eleifend. Consectetur purus
          ut faucibus pulvinar. Vulputate odio ut enim blandit volutpat maecenas
          volutpat blandit aliquam. Eget arcu dictum varius duis at consectetur
          lorem donec. Neque egestas congue quisque egestas diam in arcu. Eu
          ultrices vitae auctor eu augue ut lectus arcu. Orci ac auctor augue
          mauris augue neque. Hac habitasse platea dictumst quisque sagittis
          purus sit amet volutpat. Habitant morbi tristique senectus et netus et
          malesuada. Nulla facilisi morbi tempus iaculis urna. Ultricies mi eget
          mauris pharetra. Cras adipiscing enim eu turpis egestas. Tristique
          sollicitudin nibh sit amet commodo nulla facilisi. Nunc sed augue
          lacus viverra vitae congue eu consequat.
        </p>
      </div>
      <Toolbar />
    </div>
  );
};

export default SinglePost;
