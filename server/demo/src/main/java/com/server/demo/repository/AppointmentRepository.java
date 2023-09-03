package com.server.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.server.demo.model.Appointment;
import java.util.List;

/*
 * Appoitment Repository inherit JpaRepository
 */
public interface AppointmentRepository extends JpaRepository<Appointment,String> {
    //Repository will do all rest if you want to create your own findby, on service object just call .findByEmail to find with the email
    public List<Appointment> findByEmail(String email);
}
