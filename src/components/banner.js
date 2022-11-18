import React from 'react';
import banner from "../images/banner.jpg";
import styled from "styled-components";

const BannerDiv = styled.div`
height: 93vh;
  background: black url(${banner}) no-repeat center;
  background-size: cover;
`;

export default function Banner({ user }) {
    return (
        <BannerDiv
            className='bg-primary d-flex align-items-center justify-content-center'
        >
            <div>
                <h1 className='text-center text-light fw-bolder fs-1'>Welcome back</h1>
                <h4 className='text-center text-light fw-bolder fs-1'>{user?.name}</h4>
            </div>
        </BannerDiv>
    )
}
