import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
    <defs>
      <linearGradient id="linear-gradient" x1="64" y1="130" x2="64" y2="2" gradientTransform="matrix(1, 0, 0, -1, 0, 130)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9d91ff"/>
        <stop offset="1" stop-color="#7f7afc"/>
      </linearGradient>
    </defs>
    <circle cx="64" cy="64" r="64" fill="url(#linear-gradient)"/>
    <path d="M104.17,50.61a2.61,2.61,0,0,1,.29,3.34A203.68,203.68,0,0,1,55.84,103l-1.49,1.06a2.75,2.75,0,0,1-3.54-.29L44.1,97.06A10.48,10.48,0,0,0,29.28,82.24l-6.17-6.18A2.68,2.68,0,0,1,23.45,72l1.49-1.06A198.78,198.78,0,0,0,72.38,23.05a2.55,2.55,0,0,1,3.89-.34L82.55,29A10.48,10.48,0,0,0,97.37,43.81Z" fill="#e2d7ff"/>
    <path d="M107.14,52.46l-24,30.39-31,23.49-6-6L44,97.72l2.16-3.12.75-3.12-.42-3.32-1.24-3.11-2.08-2.5-2.49-1.66L38,80.06H34.65l-3.54,1.25L29,83.18l-5-6,8.11-1.21a148.22,148.22,0,0,0,69-29.49Z" fill="#b19cff"/>
    <path d="M41.07,97.35a3.34,3.34,0,0,1,1-2.35h0A7.16,7.16,0,0,0,31.94,84.86v0a3.33,3.33,0,0,1-2.35,1,3.29,3.29,0,0,1-2.35-1l-6.47-6.47a6,6,0,0,1,.76-9.14L23,68.21l1.93,2.71L23.45,72a2.69,2.69,0,0,0-.34,4.09l6.47,6.46v0h0A10.48,10.48,0,0,1,44.43,97.32l0,0h0l6.41,6.42a2.75,2.75,0,0,0,3.54.29L55.84,103a203.68,203.68,0,0,0,48.62-49,2.61,2.61,0,0,0-.29-3.34l-6.74-6.74-.08.07-.07.08A10.48,10.48,0,0,1,82.46,29.2l.07-.08.08-.07-6.34-6.34a2.55,2.55,0,0,0-3.89.34A198.78,198.78,0,0,1,24.94,70.92L23,68.21A195.4,195.4,0,0,0,69.66,21.15a5.87,5.87,0,0,1,9-.79L85,26.7a3.32,3.32,0,0,1,0,4.72l-.05,0A7.16,7.16,0,0,0,95,41.59l0-.05a3.32,3.32,0,0,1,4.73,0l6.74,6.74a5.94,5.94,0,0,1,.66,7.6,207.19,207.19,0,0,1-49.41,49.85l-1.49,1.06a6.07,6.07,0,0,1-7.82-.65L42.05,99.7A3.3,3.3,0,0,1,41.07,97.35Z" fill="#452a7a" fill-rule="evenodd"/>
    <path d="M63.64,34.32l1.47,1.47a1.66,1.66,0,1,1-2.35,2.35l-1.47-1.47a1.66,1.66,0,0,1,2.35-2.35Z" fill="#452a7a" fill-rule="evenodd"/>
    <path d="M69.81,40.49,71.28,42a1.66,1.66,0,1,1-2.35,2.35l-1.47-1.47a1.66,1.66,0,1,1,2.35-2.35Z" fill="#452a7a" fill-rule="evenodd"/>
    <path d="M77.45,50.48a1.66,1.66,0,0,1-2.35,0l-1.76-1.76a1.66,1.66,0,0,1,2.35-2.35l1.76,1.76A1.66,1.66,0,0,1,77.45,50.48Z" fill="#452a7a" fill-rule="evenodd"/>
    <path d="M83.62,56.65a1.66,1.66,0,0,1-2.35,0l-1.76-1.76a1.66,1.66,0,0,1,2.35-2.35l1.76,1.76A1.66,1.66,0,0,1,83.62,56.65Z" fill="#452a7a" fill-rule="evenodd"/>
    <path d="M88,58.7l1.47,1.47a1.66,1.66,0,0,1-2.35,2.35l-1.47-1.47A1.66,1.66,0,0,1,88,58.7Z" fill="#452a7a" fill-rule="evenodd"/>
    <path d="M94.19,64.87l1.47,1.47a1.66,1.66,0,0,1-2.35,2.35l-1.47-1.47a1.66,1.66,0,0,1,2.35-2.35Z" fill="#452a7a" fill-rule="evenodd"/>
    <g>
      <path d="M75.61,63.55A7.92,7.92,0,0,1,77,62.6a9.28,9.28,0,0,0-1-1.16l-.55-.52c-.37.32-.72.67-1.07,1s-.82.92-1.22,1.41A5.94,5.94,0,0,1,74,61.69a8.1,8.1,0,0,1,1-1.12,10.68,10.68,0,0,0-1.57-1c-.24.37-.46.75-.67,1.14A17.84,17.84,0,0,0,72,62.31a5.79,5.79,0,0,1,.41-1.83A7.69,7.69,0,0,1,73,59.29a13,13,0,0,0-4.08-1.17h0c-2.35-2-6.83-4.81-8.21-3.59-1,.9-.45,3,.21,4.57a17.56,17.56,0,0,0-3.61,1.84c.36.3.72.6,1,.9a10.65,10.65,0,0,1,1.27,1.31.21.21,0,0,1,0,.06l.05.07s0,0,0,0a.25.25,0,0,0,0,.07s0,0,0,0a.25.25,0,0,1,0,.07s0,0,0,0a1.17,1.17,0,0,0,0,.11v0a.92.92,0,0,1,0,.09l0,0h0a.29.29,0,0,0,0,.09v0a.6.6,0,0,0,0,.12v0a.66.66,0,0,1,0,.14v.2h0a.57.57,0,0,0,0,.13v0c0,.11,0,.22-.06.34h0v0s0,0,0,.07a0,0,0,0,0,0,0l0,.07s0,.08,0,.12a.17.17,0,0,0,0,0l-.06.12v0s0,0,0,0a1,1,0,0,1-.08.14s0,0,0,0a1.57,1.57,0,0,1-.12.19,4.16,4.16,0,0,1-.67.74,3.41,3.41,0,0,1-.58.44,2.4,2.4,0,0,1-2.88.07.27.27,0,0,1-.08-.07h0a7.6,7.6,0,0,1-.72-.8q-.21-.25-.42-.54l0,0L54,65.58c-.23-.31-.46-.65-.68-1A17.6,17.6,0,0,0,51,68.36c-1.52-.87-3.71-1.81-4.76-.83-1.52,1.4,1.61,7.22,3.29,9.38h0a13.38,13.38,0,0,0,.87,3.68c.1-.07.2-.12.3-.18a7.72,7.72,0,0,1,1.76-.71,6.18,6.18,0,0,1,1.87-.22c-.6.19-1.17.4-1.73.63s-1.1.5-1.63.79l-.35.2A11,11,0,0,0,51.67,83c.1-.12.21-.23.32-.34a8.41,8.41,0,0,1,1.5-1.15,5.56,5.56,0,0,1,1.75-.71c-.53.34-1,.69-1.51,1.07A15.24,15.24,0,0,0,52.37,83l-.37.37a6.57,6.57,0,0,0,.55.62,8.86,8.86,0,0,0,1.19,1c.07-.13.15-.26.23-.38a8.46,8.46,0,0,1,1.21-1.46,6.11,6.11,0,0,1,1.54-1.08A15.54,15.54,0,0,0,55.5,83.5,13.65,13.65,0,0,0,54.43,85l-.24.39c4.78,3,11.84.76,17.62-4.8S80.14,68,77.24,63.07c-.46.24-.91.52-1.36.81A17.31,17.31,0,0,0,74.39,65,5.94,5.94,0,0,1,75.61,63.55ZM62.68,59.64a9.36,9.36,0,0,1-.57-1c-.47-.89-.87-2.06-.16-2.61.33-.25,1-.46,3,.72A16.89,16.89,0,0,1,66.63,58a5.55,5.55,0,0,1,.72.66.43.43,0,0,1,0,.6,1.08,1.08,0,0,1-.21.16,5.5,5.5,0,0,1-4.15.41A.42.42,0,0,1,62.68,59.64ZM50.13,74.76s0,0-.06,0a.44.44,0,0,1-.55-.06l-.07-.07c-.68-.77-2.22-3.44-2.2-4.81a1.13,1.13,0,0,1,.31-.82c.73-.71,2.08,0,2.94.53a8.22,8.22,0,0,1,.69.5.44.44,0,0,1,.17.31C51.57,73.51,50.19,74.7,50.13,74.76Zm10.29,2.41-.15.12a2.4,2.4,0,0,1-2.91-.84c-.94-1.06-1.09-2.46-.33-3.13A1.58,1.58,0,0,1,58.5,73a3.12,3.12,0,0,1,1.59,1c.91,1,1.08,2.39.38,3.08Zm9.66-6.35c0,.1,0,.19,0,.29s0,0,0,0a3.19,3.19,0,0,1-.67,2.5,7.19,7.19,0,0,1,.65,1.85,2.48,2.48,0,0,1-.41,2.28,1.4,1.4,0,0,1-.26.21,2.81,2.81,0,0,1-2,.26,7.19,7.19,0,0,1-1.9-.6,2.87,2.87,0,0,1-.4.31,3.45,3.45,0,0,1-2.07.48h0a1.2,1.2,0,0,1-.29,0,.4.4,0,0,1,.16-.78l.17,0h0a2.39,2.39,0,0,0,2-.72,3.61,3.61,0,0,0,.71-2.23,2.47,2.47,0,0,1-1.71.11.88.88,0,0,1-.71-.7,1.33,1.33,0,0,1,.25-.83,5.17,5.17,0,0,1,.58-.72c.41-.44,1-1,1.52-.89a.89.89,0,0,1,.75.67,2.52,2.52,0,0,1,0,1.73,3.6,3.6,0,0,0,2.22-.77,2.32,2.32,0,0,0,.62-2.07h0v0a2.08,2.08,0,0,0,0-.23.4.4,0,0,1,.79-.12Zm-2.61-6.19,0,0a8.55,8.55,0,0,0-.4.94,5.62,5.62,0,0,0-.24,1c0,.16,0,.32-.06.48v.24a.56.56,0,0,0,0,.13h0A4,4,0,0,1,67.2,67a3.12,3.12,0,0,1,.78-.47,3.32,3.32,0,0,1,.86-.23.13.13,0,0,1,.16.12.13.13,0,0,1-.07.14h0c-.12.07-.25.12-.36.19l-.33.22a3.06,3.06,0,0,0-.57.51,4,4,0,0,0-.45.61c-.06.1-.11.21-.17.33s-.05.11-.07.17l0,.08s0,0,0,0v0h0a.4.4,0,0,1-.51.27.45.45,0,0,1-.27-.27,4.48,4.48,0,0,1-.21-1.16,3.9,3.9,0,0,1,0-.59c0-.19.06-.39.12-.58a4.15,4.15,0,0,1,.46-1.06,3.35,3.35,0,0,1,.73-.87.14.14,0,0,1,.2,0A.16.16,0,0,1,67.47,64.63Z" fill="#452a7a"/>
      <g>
        <path d="M59.58,63.15a.21.21,0,0,1,0,.06l.05.07s0,0,0,0,0,0,0,.06l0,0a.16.16,0,0,1,0,.08s0,0,0,0a.61.61,0,0,1,0,.12v0a.92.92,0,0,1,0,.09l0,0h0s0,.06,0,.09l0,0a.6.6,0,0,0,0,.12s0,0,0,0a.61.61,0,0,1,0,.14v.2h0s0,.09,0,.13v0c0,.11,0,.22-.06.33v0s0,0,0,.07,0,0,0,0l0,.07s0,.08,0,.12a.14.14,0,0,0,0,.06l-.06.11v0s0,0,0,0a.64.64,0,0,1-.08.14s0,0,0,0a1.18,1.18,0,0,1-.13.18,3.74,3.74,0,0,1-.66.74,3.29,3.29,0,0,1-.58.44,2.4,2.4,0,0,1-2.88.07s-.06,0-.08-.07h0a7.6,7.6,0,0,1-.72-.8q-.21-.25-.42-.54l0,0L54,65.58c-.23-.31-.46-.64-.68-1s-.46-.73-.67-1.1a14.12,14.12,0,0,1-1.13-2.36c-.47-1.27-.46-2.11,0-2.54.94-.85,3.12.42,4.8,1.63l.94.72c.36.3.72.6,1,.89A11.38,11.38,0,0,1,59.58,63.15Z" fill="#9a6aff"/>
        <path d="M59.2,66.67a2.19,2.19,0,0,1-.23.21,3.83,3.83,0,0,1-.62.48,2.7,2.7,0,0,1-3.23,0l0,0-.06,0a9.15,9.15,0,0,1-.75-.83c-.14-.18-.29-.36-.43-.55l0-.06a.36.36,0,0,0-.07-.1c-.24-.33-.47-.67-.69-1s-.48-.78-.68-1.12a14.35,14.35,0,0,1-1.15-2.41c-.52-1.4-.49-2.34.12-2.87.88-.79,2.63-.25,5.19,1.61l1,.73c.41.33.75.62,1.06.91A12.93,12.93,0,0,1,59.82,63l0,.06,0,.06v0l.11.14v0l0,.06v0a.39.39,0,0,1,0,.09v0l0,0,0,.1,0,.17v0l0,.06c0,.06,0,.11,0,.16h0v0h0a1.09,1.09,0,0,1,0,.18v.23a.45.45,0,0,1,0,.13v0l-.06.3,0,.14v0s0,0,0,.09l0,0s0,.06,0,.08l0,.07-.06.14h0a.34.34,0,0,1,0,.08h0a.54.54,0,0,1-.06.11v0a.44.44,0,0,1-.06.1c0,.07-.09.13-.13.19A4.51,4.51,0,0,1,59.2,66.67Zm-7.5-7.83c-.35.35-.32,1.09.08,2.18a13.91,13.91,0,0,0,1.1,2.31c.2.34.42.7.67,1.09s.44.66.67,1l.08.12,0,0,.41.52a6.68,6.68,0,0,0,.69.76l0,0,.06,0a2.09,2.09,0,0,0,2.5-.11,3,3,0,0,0,.53-.41,3.66,3.66,0,0,0,.62-.68,1.88,1.88,0,0,0,.12-.18l0,0,0-.06a.05.05,0,0,0,0,0l.07-.14s0,0,0,0a.49.49,0,0,0,0-.07c0-.06,0-.09.05-.13l0-.09a.07.07,0,0,1,0,0l0-.07a2.21,2.21,0,0,0,0-.25v0h0v0l0-.11v-.23s0,0,0-.06,0-.05,0-.08l0-.15,0-.06,0-.11,0-.06,0-.11h0l0,0h0l0,0h0l-.08-.12h0a13.65,13.65,0,0,0-1.23-1.28c-.3-.27-.64-.56-1-.87s-.6-.48-.93-.72c-2.19-1.59-3.8-2.2-4.41-1.65ZM60,63.15Z" fill="#452a7a"/>
      </g>
      <path d="M67.35,58.65a.43.43,0,0,1,0,.6,1.08,1.08,0,0,1-.21.16,5.5,5.5,0,0,1-4.15.41.42.42,0,0,1-.27-.18,9.36,9.36,0,0,1-.57-1c-.47-.89-.87-2.06-.16-2.61.33-.25,1-.46,3,.72A16.89,16.89,0,0,1,66.63,58,5.55,5.55,0,0,1,67.35,58.65Z" fill="#9a6aff"/>
      <path d="M51.36,70.36c.21,3.15-1.17,4.34-1.23,4.4s0,0-.06,0a.44.44,0,0,1-.55-.06l-.07-.07c-.68-.77-2.22-3.44-2.2-4.81a1.13,1.13,0,0,1,.31-.82c.73-.71,2.08,0,2.94.53a8.22,8.22,0,0,1,.69.5A.44.44,0,0,1,51.36,70.36Z" fill="#9a6aff"/>
      <path d="M54.31,79.48c-.6.19-1.17.4-1.73.63s-1.1.5-1.63.79l-.35.2c-.41.23-.8.49-1.19.76s-.49.35-.74.53-.25.19-.37.28-.25.19-.38.28c.08-.13.18-.26.27-.39s.18-.26.28-.38a6.06,6.06,0,0,1,.67-.67,7,7,0,0,1,1.24-.92c.1-.07.2-.12.3-.18a7.72,7.72,0,0,1,1.76-.71A6.18,6.18,0,0,1,54.31,79.48Z" fill="#9a6aff"/>
      <path d="M55.24,80.76c-.53.34-1,.69-1.51,1.07A15.24,15.24,0,0,0,52.37,83l-.37.37c-.3.31-.59.62-.86,1s-.38.48-.58.72-.18.25-.27.36l-.29.37c0-.14.1-.29.16-.44a3.93,3.93,0,0,1,.18-.43c.14-.28.28-.56.45-.83A8.77,8.77,0,0,1,51.67,83c.1-.12.21-.23.32-.34a8.41,8.41,0,0,1,1.5-1.15A5.56,5.56,0,0,1,55.24,80.76Z" fill="#9a6aff"/>
      <path d="M56.72,82.13A15.54,15.54,0,0,0,55.5,83.5,13.65,13.65,0,0,0,54.43,85l-.24.39c-.24.39-.47.77-.67,1.18s-.27.54-.4.82a3.79,3.79,0,0,0-.18.42c-.07.14-.13.29-.2.42,0-.16,0-.3,0-.46s.05-.32.08-.46a6.8,6.8,0,0,1,.26-.91,7.8,7.8,0,0,1,.61-1.31c.07-.13.15-.26.23-.38a8.46,8.46,0,0,1,1.21-1.46A6.11,6.11,0,0,1,56.72,82.13Z" fill="#9a6aff"/>
      <path d="M76.06,56.31l-.31.35c-.11.12-.22.22-.32.34s-.42.46-.6.69a16.62,16.62,0,0,0-1.1,1.44l-.27.4c-.24.37-.46.75-.67,1.14A17.84,17.84,0,0,0,72,62.31a5.79,5.79,0,0,1,.41-1.83A7.69,7.69,0,0,1,73,59.29a4.94,4.94,0,0,1,.3-.49,8,8,0,0,1,1.24-1.42,5.8,5.8,0,0,1,.74-.59,2.42,2.42,0,0,1,.4-.25Z" fill="#9a6aff"/>
      <path d="M78.68,58.62a3.26,3.26,0,0,1-.4.24l-.39.25-.76.5a12.91,12.91,0,0,0-1.43,1.1l-.25.21c-.37.32-.72.67-1.07,1s-.82.92-1.22,1.41A5.94,5.94,0,0,1,74,61.69a8.1,8.1,0,0,1,1-1.12l.3-.27a7.55,7.55,0,0,1,1.57-1,7.4,7.4,0,0,1,.87-.38,3,3,0,0,1,.45-.14A4.35,4.35,0,0,1,78.68,58.62Z" fill="#9a6aff"/>
      <path d="M80.81,61.58l-.44.16a3.12,3.12,0,0,0-.43.15c-.29.1-.58.2-.86.32a16.18,16.18,0,0,0-1.64.75l-.2.11c-.46.24-.91.52-1.36.81A17.31,17.31,0,0,0,74.39,65a5.94,5.94,0,0,1,1.22-1.43A7.92,7.92,0,0,1,77,62.6l.22-.12a7.76,7.76,0,0,1,1.77-.67,7.27,7.27,0,0,1,.93-.18l.47,0Z" fill="#9a6aff"/>
      <path d="M70.08,70.82c0,.1,0,.19,0,.29s0,0,0,0a3.19,3.19,0,0,1-.67,2.5,7.19,7.19,0,0,1,.65,1.85,2.48,2.48,0,0,1-.41,2.28,1.4,1.4,0,0,1-.26.21,2.81,2.81,0,0,1-2,.26,7.19,7.19,0,0,1-1.9-.6,2.87,2.87,0,0,1-.4.31,3.45,3.45,0,0,1-2.07.48h0a1.2,1.2,0,0,1-.29,0,.4.4,0,0,1,.16-.78l.17,0h0a2.39,2.39,0,0,0,2-.72,3.61,3.61,0,0,0,.71-2.23,2.47,2.47,0,0,1-1.71.11.88.88,0,0,1-.71-.7,1.33,1.33,0,0,1,.25-.83,5.17,5.17,0,0,1,.58-.72c.41-.44,1-1,1.52-.89a.89.89,0,0,1,.75.67,2.52,2.52,0,0,1,0,1.73,3.6,3.6,0,0,0,2.22-.77,2.32,2.32,0,0,0,.62-2.07h0v0a2.08,2.08,0,0,0,0-.23.4.4,0,0,1,.79-.12Z" fill="#9a6aff"/>
      <path d="M67.45,64.47a.16.16,0,0,1,0,.16l0,0a8.55,8.55,0,0,0-.4.94,5.62,5.62,0,0,0-.24,1c0,.16,0,.32-.06.48v.24a.56.56,0,0,0,0,.13h0A4,4,0,0,1,67.2,67a3.12,3.12,0,0,1,.78-.47,3.32,3.32,0,0,1,.86-.23.13.13,0,0,1,.16.12.13.13,0,0,1-.07.14h0c-.12.07-.25.12-.36.19l-.33.22a3.06,3.06,0,0,0-.57.51,4,4,0,0,0-.45.61c-.06.1-.11.21-.17.33s-.05.11-.07.17l0,.08s0,0,0,0v0h0a.4.4,0,0,1-.51.27.45.45,0,0,1-.27-.27,4.48,4.48,0,0,1-.21-1.16,3.9,3.9,0,0,1,0-.59c0-.19.06-.39.12-.58a4.15,4.15,0,0,1,.46-1.06,3.35,3.35,0,0,1,.73-.87A.14.14,0,0,1,67.45,64.47Z" fill="#9a6aff"/>
      <path d="M60.09,74c.91,1,1.08,2.39.38,3.08l0,.06-.15.12a2.4,2.4,0,0,1-2.91-.84c-.94-1.06-1.09-2.46-.33-3.13A1.58,1.58,0,0,1,58.5,73,3.12,3.12,0,0,1,60.09,74Z" fill="#9a6aff"/>
    </g>
    <path d="M107.23,91.44a1.33,1.33,0,0,1-2.56,0l-1.85-7.06a1.32,1.32,0,0,0-.94-.94l-7.06-1.86a1.32,1.32,0,0,1,0-2.55l7.06-1.85a1.32,1.32,0,0,0,.94-.94l1.85-7.06a1.32,1.32,0,0,1,2.56,0l1.85,7.06a1.32,1.32,0,0,0,.94.94L117.08,79a1.32,1.32,0,0,1,0,2.55L110,83.44a1.32,1.32,0,0,0-.94.94Z" fill="#7645d9"/>
    <path d="M43.78,21.2a.93.93,0,0,1,1.79,0l1.3,4.95a.94.94,0,0,0,.66.66l4.95,1.3a.93.93,0,0,1,0,1.79l-4.95,1.3a.94.94,0,0,0-.66.66l-1.3,5a.93.93,0,0,1-1.79,0l-1.3-5a.9.9,0,0,0-.66-.66l-5-1.3a.93.93,0,0,1,0-1.79l5-1.3a.9.9,0,0,0,.66-.66Z" fill="#7645d9"/>
    <path d="M27.6,103.23a.6.6,0,0,1-1.16,0L25.6,100a.6.6,0,0,0-.43-.43L22,98.75a.6.6,0,0,1,0-1.16l3.21-.84a.6.6,0,0,0,.43-.43l.84-3.21a.6.6,0,0,1,1.16,0l.85,3.21a.59.59,0,0,0,.42.43l3.21.84a.6.6,0,0,1,0,1.16l-3.21.84a.59.59,0,0,0-.42.43Z" fill="#7645d9"/>
    </Svg>
  );
};

export default Icon;