package com.server.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.demo.model.Appointment;
import com.server.demo.repository.AppointmentRepository;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    public void saveAppointment(Appointment appointment){
        appointmentRepository.save(appointment);
        
    }
}
