import React from 'react'
import {useState, useEffect} from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchJobs = async () => {
            const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/jobs');
            const data = await res.json();
            
            setJobs(isHome ? data.slice(0,3) : data);
            setLoading(false);
        };
        fetchJobs();
    },[]);

  return (
    <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
        { isHome ? 'Recent Jobs' : 'Browse Jobs' }
      </h2>
      
        {loading ? (<Spinner loading={loading}/>) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job._id} job={job}/>
        ))}
          </div>
        )}
        
        
     
    </div>
  </section>
  )
}

export default JobListings;