/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Egor Kotov (https://sketchfab.com/Egor_Kotov)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/empire-stormtrooper-helmet-d12a1feb6d0e4b9e8c86d39bcd528593
title: Empire stormtrooper helmet
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export function Empire_stormtrooper_helmet(props) {
  const { nodes, materials } = useGLTF("/empire_stormtrooper_helmet.glb");
  return (
    <group {...props} dispose={null}>
      <motion.group
        rotation={[-Math.PI / 2, 0, 0]}
        initial={{ rotateZ: (360 * Math.PI) / 180 }}
        animate={{ rotateZ: (0 * Math.PI) / 180 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 10,
        }}
      >
        <group position={[0, 0, -2.5]} rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
            <mesh
              position={[0, 0, 0]}
              geometry={nodes.Object_4.geometry}
              material={
                materials["Untitled_d3011c1b-8d32-da8f-0e14-00c13cd8da71"]
              }
            />
          </group>
        </group>
      </motion.group>
    </group>
  );
}

useGLTF.preload("/empire_stormtrooper_helmet.glb");

// initial={{ rotateX: (90 * Math.PI) / 180 }}
//             animate={{rotateX:(0*Math.PI)/180}}
//             transition={{ delay: 2, duration: "infinite" }}

// return (
//   <group {...props} dispose={null}>
//      <group rotation={[-Math.PI / 2, 0, 0]}>
//       <group position={[0, 0.7, -3.77]} rotation={[Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]} scale={1.5}>
//           <mesh
//             geometry={nodes.Object_4.geometry}
//             material={
//               materials["Untitled_d3011c1b-8d32-da8f-0e14-00c13cd8da71"]
//             }
//           />
//         </group>
//       </group>
//     </group>
//   </group>
// );