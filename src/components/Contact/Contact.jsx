import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Snackbar, Alert, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState({ open: false, type: 'success', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        'service_lhf629o',
        'template_2miaqrd',
        {
          to_email: 'kev.borger@gmail.com',
          title: t(`contact.types.${formData.projectType}`),
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        '_eAamP46m8slT7oxX'
      );

      setFormData({ name: '', email: '', message: '', projectType: '' });
      setNotification({ open: true, type: 'success', message: t('contact.success') });
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({ open: true, type: 'error', message: t('contact.error') });
    } finally {
      setSending(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <DialogTitle>{t('contact.title')}</DialogTitle>
        </motion.div>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="project-type-label">{t('contact.projectType')}</InputLabel>
              <Select
                labelId="project-type-label"
                name="projectType"
                value={formData.projectType}
                label={t('contact.projectType')}
                onChange={handleChange}
                required
              >
                <MenuItem value="module">{t('contact.types.module')}</MenuItem>
                <MenuItem value="creation">{t('contact.types.creation')}</MenuItem>
                <MenuItem value="maintenance">{t('contact.types.maintenance')}</MenuItem>
                <MenuItem value="other">{t('contact.types.other')}</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="name"
              label={t('contact.name')}
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label={t('contact.email')}
              fullWidth
              margin="normal"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              name="message"
              label={t('contact.message')}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>{t('contact.cancel')}</Button>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              disabled={sending}
            >
              {t('contact.send')}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity={notification.type} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;