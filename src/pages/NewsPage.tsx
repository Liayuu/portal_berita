import React, { useState } from "react";

const NewsPage: React.FC = () => {

    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    //   onAddComment(author, content);
      setAuthor('');
      setContent('');
    };
  //   const comments = [
  //     { author: 'John Doe', content: 'Great article!', date: '2023-10-01' },
  //     { author: 'Jane Smith', content: 'Very informative, thanks!', date: '2023-10-02' },
  //   ];

  return (
    <div className="w-full h-full p-10 overflow-y-auto overflow-x-hidden bg-neutral-100">
      <div className="grid grid-cols-3 w-full h-full gap-4">
        <div className="col-span-2 overflow-hidden rounded-lg shadow-lg bg-white p-5 max-h-min">
          <img
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Berita utama"
            className="w-full max-h-96 object-cover rounded-lg"
          />
          <h3 className="text-3xl font-bold mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <div className="flex flex-row items-start justify-start mt-1">
            <p className="text-sm text-gray-800 font-bold">
              Gyokeres Mykhailovsky
            </p>
            <p className="text-sm text-gray-500 font-semibold mx-2"> - </p>
            <p className="text-sm text-gray-500 font-semibold"> 19 Jan 2024</p>
          </div>
          <div className="text-gray-900 text-md font-sans space-y-5 leading-6 mt-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus eleifend nibh, in posuere velit ultricies ac. Etiam vitae
              massa at nisl malesuada pretium vitae accumsan nunc. Integer
              posuere finibus velit, in congue orci aliquet eu. In vel nisl id
              libero condimentum finibus. Vivamus non lacinia magna. Suspendisse
              aliquam varius pharetra. Fusce ac sagittis tortor, non blandit
              purus. Vivamus diam lectus, porta ultricies sollicitudin vel,
              tincidunt in lorem. Aliquam sed tempus justo, sit amet mollis
              velit. Fusce vehicula tempor condimentum.
            </p>
            <p>
              Proin finibus justo in ligula malesuada, ac eleifend arcu aliquet.
              Integer et cursus neque. Etiam ut tempus massa, a pretium metus.
              Nulla facilisi. Mauris eget quam dolor. Cras finibus mauris a
              ipsum euismod, et tristique metus vehicula. Praesent posuere diam
              pulvinar nunc commodo eleifend. Curabitur id nulla dictum, cursus
              turpis vitae, viverra ligula. Cras sit amet nunc mollis, accumsan
              velit sit amet, ullamcorper erat. Morbi vitae ligula imperdiet
              felis euismod auctor sed consequat elit. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Donec ac ante enim. Sed fringilla quam in sollicitudin
              mollis.
            </p>
            <p>
              Nullam erat felis, molestie ut justo a, ultrices mollis dui. Donec
              ac risus elit. Suspendisse varius lacinia nisi eu dapibus.
              Vestibulum id arcu consequat, commodo purus sed, gravida orci.
              Nunc lobortis volutpat mi, eu mollis velit egestas fringilla. In
              sit amet risus sit amet sem dictum mollis in et erat. Maecenas non
              dui leo. Aenean a volutpat odio. Aenean sagittis id lectus
              bibendum volutpat. Fusce suscipit turpis augue, eu porttitor
              libero condimentum et. Sed vitae tincidunt erat. Sed tincidunt
              scelerisque hendrerit. Sed tristique est convallis justo ultricies
              vulputate. Proin eu convallis urna. Sed orci nibh, imperdiet non
              neque nec, posuere consequat ante. Nunc molestie lobortis sapien.
            </p>
            <p>
              Morbi imperdiet justo accumsan urna consequat, in fringilla tellus
              semper. Mauris consectetur semper dignissim. Vivamus ipsum massa,
              rhoncus ut risus eu, luctus sollicitudin massa. Nam nibh justo,
              convallis ac ultricies feugiat, finibus vel mi. Etiam blandit vel
              odio vel convallis. Nullam pulvinar, justo suscipit gravida
              eleifend, tortor mi rutrum diam, id tincidunt arcu eros consequat
              tellus. Phasellus volutpat eleifend metus, quis posuere urna
              suscipit et. Donec imperdiet non est in tincidunt. Nullam et
              consectetur felis, sed consectetur eros. Nullam enim orci,
              tincidunt quis nisi ac, ultricies ultricies neque. Fusce non nibh
              tellus. Curabitur eleifend sodales vehicula. Cras nec magna risus.
              Praesent maximus lorem et hendrerit pharetra.
            </p>
            <p>
              Phasellus porta erat lobortis venenatis aliquet. Proin et urna et
              ante rutrum ultrices. Cras nisl est, bibendum ultrices dolor nec,
              auctor venenatis arcu. In hac habitasse platea dictumst. Nunc eu
              augue laoreet nulla tempor sagittis id in ante. Mauris eu volutpat
              ligula, ut pretium neque. Suspendisse sollicitudin enim ut leo
              auctor posuere.
            </p>
          </div>
          <hr className="border-t border-gray-400 my-5" />
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="author"
              >
                Name
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Comment
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Comment
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 overflow-hidden rounded-lg shadow-lg bg-white p-5 min-h-max"></div>
      </div>
    </div>
  );
};

export default NewsPage;
