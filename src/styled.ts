import styled from "styled-components";

export const Container = styled.div`
    background-color: #24282F;
    min-height: 100vh;
`;

export const Map = styled.div`
    width: 480px;
    height : 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
`;

export const Ballon = styled.div`
    position: absolute;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;