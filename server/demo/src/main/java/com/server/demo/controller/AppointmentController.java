package com.server.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.demo.dto.AppointmentDto;
import com.server.demo.model.Appointment;
import com.server.demo.repository.AppointmentRepository;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    private AppointmentRepository appointmentRepository;

    @PostMapping("/")
    private ResponseEntity<String> submitAppointment(@RequestBody AppointmentDto appointmentDto){
        Appointment appointment = Appointment.builder()
                                .first_name(appointmentDto.getF_name())
                                .last_name(appointmentDto.getLast_name())
                                .email(appointmentDto.getEmail())
                                .cell_phone(appointmentDto.getCell_phone())
                                .pet_name(appointmentDto.getPet_name())
                                .brea(appointmentDto.getBrea())
                                .age(appointmentDto.getAge())
                                .orther_information(appointmentDto.getOrther_information())
                                .build();
        
        appointmentRepository.save(appointment);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Appointment Saved\n");
    }

}
