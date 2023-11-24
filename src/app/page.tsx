import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">SamGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8" />
              <h2 className="py-1">Examples</h2>
            </div>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain Something to me</p>
            <p className="infoText">How does a guard let work in swift?</p>
            <p className="infoText">What does a Typescript enum work?</p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className="h-8 w-8" />
              <h2 className="py-1">Capabilities</h2>
            </div>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Change which ChatGPT model you want to use
            </p>
            <p className="infoText">
              Messages are being stored in firebases firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when the AI is thinking
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2 className="py-1">Limitations</h2>
            </div>
          </div>
          <div className="space-y-2">
            <p className="infoText">Could get it wrong</p>
            <p className="infoText">Certain models wont be up to date</p>
            <p className="infoText">Made by a swift dev?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
