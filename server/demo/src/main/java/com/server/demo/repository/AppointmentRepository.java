package com.server.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.demo.model.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment,String> {
    
}
