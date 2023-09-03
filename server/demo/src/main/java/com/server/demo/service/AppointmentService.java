package com.server.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.demo.model.Appointment;
import com.server.demo.repository.AppointmentRepository;

/*
 * Appointment Service is seperated from the controller
 */
@Service
public class AppointmentService {
    // Autowired initialize the object without intialize in constructor in this class
    @Autowired
    private AppointmentRepository appointmentRepository;

    /*
     * @param Appointment appointment object that created by controller
     */
    public void saveAppointment(Appointment appointment){
        appointmentRepository.save(appointment);
    }
}
