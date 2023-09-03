package com.server.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.demo.dto.AppointmentDto;
import com.server.demo.model.Appointment;
import com.server.demo.service.AppointmentService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    AppointmentService appointmentService;

    @PostMapping("/")
    private ResponseEntity<String> submitAppointment(@RequestBody AppointmentDto appointmentDto){
        Appointment appointment = Appointment.builder()
                                .firstName(appointmentDto.getF_name())
                                .lastName(appointmentDto.getLast_name())
                                .email(appointmentDto.getEmail())
                                .phoneNumber(appointmentDto.getCell_phone())
                                .petName(appointmentDto.getPet_name())
                                .brea(appointmentDto.getBreed())
                                .age(appointmentDto.getAge())
                                .otherInformation(appointmentDto.getOther_information())
                                .build();
        
        appointmentService.saveAppointment(appointment);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Appointment Saved\n");
    }

}
