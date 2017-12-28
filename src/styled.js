import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    will-change: transform, opacity;
  }

.animated.infinite {
  animation-iteration-count: infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}
.zoomIn {
  animation-name: zoomIn;
}
`;
