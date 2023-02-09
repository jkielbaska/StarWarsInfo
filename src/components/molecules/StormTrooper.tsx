import { Canvas } from "@react-three/fiber";
import { Empire_stormtrooper_helmet } from "../../../public/assets/stormtrooper/Empire_stormtrooper_helmet";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export const StormTrooper = () => {
  return (
    <div className="w-full h-30v pt-5">
      <Canvas>
        <ambientLight intensity={0.25}></ambientLight>
        <pointLight position={[10, 10, 50]} />
        <Empire_stormtrooper_helmet />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 7]}
          key={undefined}
          view={undefined}
          quaternion={undefined}
          attach={undefined}
          args={undefined}
          onUpdate={undefined}
          clear={undefined}
          up={undefined}
          scale={undefined}
          rotation={undefined}
          matrix={undefined}
          layers={undefined}
          dispose={undefined}
          raycast={undefined}
          onClick={undefined}
          type={undefined}
          id={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerDown={undefined}
          onPointerMove={undefined}
          onPointerUp={undefined}
          onPointerCancel={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onWheel={undefined}
          name={undefined}
          zoom={undefined}
          onPointerMissed={undefined}
          visible={undefined}
          uuid={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
          matrixWorldInverse={undefined}
          projectionMatrix={undefined}
          projectionMatrixInverse={undefined}
          isCamera={undefined}
          near={undefined}
          far={undefined}
          isPerspectiveCamera={undefined}
          fov={undefined}
          aspect={undefined}
          focus={undefined}
          filmGauge={undefined}
          filmOffset={undefined}
          setFocalLength={undefined}
          getFocalLength={undefined}
          getEffectiveFOV={undefined}
          getFilmWidth={undefined}
          getFilmHeight={undefined}
          setViewOffset={undefined}
          clearViewOffset={undefined}
          updateProjectionMatrix={undefined}
          setLens={undefined}
        />
        {/* tu musi tak być bo inaczej jest blad typescripta */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};
