import React from 'react';
import { HiOutlineUpload } from 'react-icons/hi';

const SubmitModal = ({title}) => {
  return (
    <>
      <div className="modal sm:modal-middle">
        <div className="modal-box py-3">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-4 mx-auto border-2 rounded-full p-2 border-primary-content text-primary-content"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h1 className="text-base text-center text-semibold text-neutral-content">
            {title}
          </h1>

          {/* cancel btn */}
          <div className="modal-action  justify-center px-4">
            <label
              htmlFor="my-modal-6"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 "
            >
              No, Cancel
            </label>
            <button
              type="submit"
              className=" bg-primary-content text-white hover:opacity-90 transition-opacity duration-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I&lsquo;m sure <HiOutlineUpload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitModal;