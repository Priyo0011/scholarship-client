import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/react'
  import { Fragment, useState } from 'react'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import UpdateScholarshipForm from '../Form/UpdateScholarshipForm';


const UpdateScholarshipModal = ( { setIsEditModalOpen, scholarship, refetch,isOpen }) => {
    const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const [scholarshipData, setScholarshipData] = useState(scholarship)


  //   handle Image update
  const handleImage = async image => {
    setLoading(true)
    try {
      // upload image
      const image_url = await imageUpload(image)
      console.log(image_url)
      setScholarshipData({ ...scholarshipData, image: image_url })
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error(err.message)
    }
  }


  
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const updatedScholarshipData = Object.assign({}, scholarshipData)
    delete updatedScholarshipData._id
    try {
      const { data } = await axiosSecure.put(
        `/scholarship/update/${scholarship?._id}`,
        updatedScholarshipData
      )
      console.log(data)
      refetch()
      setIsEditModalOpen(false)
      setLoading(false)
      toast.success('scholarship info updated')
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error(err.message)
    }
  }
    return (
        <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  
                </DialogTitle>
                <div className='mt-2 w-full'>
                  {/* Update room form */}
                  <UpdateScholarshipForm
                    handleSubmit={handleSubmit}

                    scholarshipData={scholarshipData}
                    loading={loading}
                    handleImage={handleImage}
                    setScholarshipData={setScholarshipData}
                  />
                </div>
                <hr className='mt-8 ' />
                <div className='mt-2 '>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default UpdateScholarshipModal;