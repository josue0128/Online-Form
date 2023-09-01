package com.server.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.server.demo.model.Appointment;
import java.util.Optional;


public interface AppointmentRepository extends CrudRepository<Appointment, String>{
    public Optional<Appointment> findById(String id);
}
