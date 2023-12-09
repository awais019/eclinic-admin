export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type DoctorAll = {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  specialization: string;
  hospital_clinic_name: string;
  city: string;
};

export type Doctor = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: any;
  gender: string;
  image: any;
  email_verified: boolean;
  phone_verified: boolean;
  profile_setup: boolean;
  role: string;
  password: string;
  created_at: string;
  updated_at: string;
  address: string;
  city: string;
  state: string;
  specialization: string;
  hospital_clinic_name: string;
  verification: string;
  about: any;
  locationId: string;
  userId: string;
  appointment_types_allowed: string[];
  document: string;
};
